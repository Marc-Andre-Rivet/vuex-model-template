import _ from 'lodash';
import TYPE from 'enumerations/type';
import Wrapper from 'ProxyWrapper';

let stack = [];

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
                throw new Error();
            }
        });

        if (template[property].properties) {
            actions[property] = applyActions(template[property].properties);
        }
    });

    return actions;
}

function throwError(type, data) {
    throw new Error(`expected ${type.toString()} but got ${typeof data} in ${stack.join('.')}`);
}

function validateProperty(template) {
    if (_.isUndefined(this)) {
        return;
    }

    switch (template.type) {
        case TYPE.Any:
            break;
        case TYPE.Array:
            if (!_.isArray(this)) {
                throwError(template.type, this);
            } else {
                _.each(this, item => {
                    item::validateProperty(template.items);
                });
            }
            break;
        case TYPE.Boolean:
            if (!_.isBoolean(this)) {
                throwError(template.type, this);
            }
            break;
        case TYPE.Complex:
            if (!_.isObject(this)) {
                throwError(template.type, this);
            }

            this::validate(template.properties)
            break;
        case TYPE.Number:
            if (!_.isNumber(this)) {
                throwError(template.type, this);
            }
            break;
        case TYPE.Object:
            if (!_.isObject(this)) {
                throwError(template.type, this);
            }
            break;
        case TYPE.String:
            if (!_.isString(this)) {
                throwError(template.type, this);
            }
            break;
        default:
            throw new Error(`unexpected type: ${template.type}`);
    }
}

function validate(template) {
    let unexpectedProperties = _.difference(
        _.keys(this),
        _.keys(template)
    );

    if (unexpectedProperties.length) {
        throw new Error(`unexpected properties found in ${stack.join('.') || 'data'}: ${unexpectedProperties}`);
    }

    let expectedProperties = _.intersection(
        _.keys(this),
        _.keys(template)
    );

    _.each(expectedProperties, expectedProperty => {
        stack.push(expectedProperty);
        this[expectedProperty]::validateProperty(template[expectedProperty]);
        stack.splice(-1);
    });
}

export default class ModelObject {
    constructor(data, template) {
        stack = [];
        data = data || {};

        data::validate(template);
        this::apply(data, template);

        this.actions = applyActions(template);

        return Wrapper.getProxy(this);
    }
}