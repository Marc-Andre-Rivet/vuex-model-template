import _ from 'lodash';
import TYPE from 'enumerations/type';

function visit(template, promises = []) {
    if (!this) {
        return;
    }

    _.forOwn(template, (property, key) => {
        if (property.deserialize) {
            /*#if log*/
            console.log('deserialize property', key);
            /*#endif*/
            promises.push(Promise.resolve(property.deserialize(this[key])).then(result => {
                /*#if log*/
                console.log('deserialized property', key, result);
                /*#endif*/
                this[key] = result;
            }));
        } else if (property.type === TYPE.Complex) {
            this[key]::visit(property.properties, promises);
        }
    });

    return promises;
}

export default (data, template) => {
    let promises = data::visit(template);

    /*#if log*/
    if (promises && promises.length) {
        console.log('deserializing', data);
    }
    /*#endif*/
    return Promise.all(promises).then(() => data);
};