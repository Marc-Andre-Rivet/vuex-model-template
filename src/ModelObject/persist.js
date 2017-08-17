import _ from 'lodash';
import TYPE from 'enumerations/type';

export default function persist(target, template) {
    _.forOwn(template, (property, key) => {
        if (property.transient) {
            return;
        }

        if (property.type === TYPE.Object) {
            target[key] = this[key];
            if (_.isFunction(property.serialize)) {
                target[key] = property.serialize(this[key]);
            }
        } else if (property.type === TYPE.Complex) {
            if (_.isFunction(property.serialize)) {
                target[key] = property.serialize(this[key]);
            } else if (this[key]) {
                target[key] = this[key]::persist({}, property.properties);
            }
        } else if (property.type === TYPE.Array &&
            (_.isFunction(property.serialize) || (property.items && _.isFunction(property.items.serialize)))) {
            let array = this[key];
            if (_.isFunction(property.serialize)) {
                target[key] = property.serialize(array);
                array = target[key];
            }

            if (_.isFunction(property.items.serialize)) {
                target[key] = _.map(array, property.items.serialize);
            }
        } else {
            target[key] = this[key];
        }
    });

    if (template.serialize) {
        target = template.serialize(target);
    }

    return target;
}