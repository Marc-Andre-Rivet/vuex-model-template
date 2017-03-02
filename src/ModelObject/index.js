import _ from 'lodash';
import TYPE from 'enumerations/type';
import validate from 'ModelObject/validate';
import Wrapper from 'ProxyWrapper';

function apply(data, template) {
    let expectedProperties = _.intersection(
        _.keys(data),
        _.keys(template)
    );

    _.defaults(this, data);

    let missingProperties = _.difference(
        _.keys(template),
        _.keys(data)
    );

    _.each(missingProperties, property => {
        this[property] = template[property].defaultValue;
    });
}

function applyActions(template) {
    let actions = {};

    let properties = Object.getOwnPropertyNames(template);
    _.each(properties, property => {
        let propertyActions = template[property].actions;
        _.forOwn(template[property].actions, (value, key) => {
            if (key === 'set' || key === 'clear') {
                actions[value] = value;
            } else if (key === 'add' || key === 'remove') {
                actions[property] = actions[property] || {};
                actions[property][value] = value;
            } else {
                throw new Error(`unexpected action '${key}'`);
            }
        });

        if (template[property].properties) {
            actions[property] = applyActions(template[property].properties);
        }
    });

    return actions;
}

export default class ModelObject {
    constructor(data, template) {
        data = data || {};

        data::validate(template);
        this::apply(data, template);

        this.actions = applyActions(template);

        return Wrapper.getProxy(this);
    }
}