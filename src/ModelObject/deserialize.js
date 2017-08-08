import _ from 'lodash';
import TYPE from 'enumerations/type';

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
                promise = Promise.resolve(rawData::property.deserialize(this[key], rawData)).then(result => {
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
                    return Promise.resolve(rawData::property.items.deserialize(item, rawData));
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
            promises.push(Promise.resolve(rawData::property.deserialize(this[key], rawData)).then(result => {
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
    let dataPromise = template.deserialize ?
        Promise.resolve(template.deserialize(data)) :
        Promise.resolve(data);

    return dataPromise.then(resolvedData => {
        let promises = resolvedData::visit(resolvedData, template) || [];

        /*#if log*/
        if (promises.length) {
            console.log('deserializing', resolvedData);
        }
        /*#endif*/
        return Promise.all(promises).then(() => resolvedData);
    });

};