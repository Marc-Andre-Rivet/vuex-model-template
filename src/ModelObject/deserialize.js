import _ from 'lodash';
import TYPE from 'enumerations/type';

let currentData;

function visit(rawData, template, promises = []) {
    if (!this) {
        return;
    }

    _.forOwn(template, (property, key) => {
        if (property.type === TYPE.Array && property.items && property.items.deserialize) {
            /*#if log*/
            console.log('deserialize array property', key, this[key]);
            /*#endif*/

            let promise;
            if (property.deserialize) {
                promise = Promise.resolve(currentData::property.deserialize(this[key], rawData)).then(result => {
                    /*#if log*/
                    console.log('deserialized property', key, result);
                    /*#endif*/
                    this[key] = result;

                    return result;
                });
            } else {
                promise = Promise.resolve(this[key]);
            }

            promises.push(promise.then(items => {
                let itemPromises = _.map(items, item => {
                    return Promise.resolve(currentData::property.items.deserialize(item, rawData));
                });

                return Promise.all(itemPromises).then(results => {
                    /*#if log*/
                    console.log('deserialized array property', key, results);
                    /*#endif*/
                    this[key] = results;
                });
            }));
        } else if (property.deserialize) {
            /*#if log*/
            console.log('deserialize property', key);
            /*#endif*/
            promises.push(Promise.resolve(currentData::property.deserialize(this[key], rawData)).then(result => {
                /*#if log*/
                console.log('deserialized property', key, result);
                /*#endif*/
                this[key] = result;
            }));
        } else if (property.type === TYPE.Complex) {
            this[key]::visit(rawData, property.properties, promises);
        }
    });

    return promises;
}

export default (data, template) => {
    currentData = data;
    let promises = data::visit(data, template);

    /*#if log*/
    if (promises && promises.length) {
        console.log('deserializing', data);
    }
    /*#endif*/
    return Promise.all(promises).then(() => data);
};