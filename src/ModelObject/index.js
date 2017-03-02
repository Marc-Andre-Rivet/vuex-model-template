import _ from 'lodash';
import TYPE from 'enumerations/type';
import Wrapper from 'ProxyWrapper';

function apply(data, template) {
    let expectedProperties = _.intersection(
        Object.getOwnPropertyNames(data),
        Object.getOwnPropertyNames(template)
    );

    _.defaults(this, data);

    let missingProperties = _.difference(
        Object.getOwnPropertyNames(template),
        Object.getOwnPropertyNames(data)
    );

    _.each(missingProperties, property => {
        this[property] = template[property].defaultValue;
    });
}

function throwError(type, data) {
    throw new Error(`expected ${type.toString()}, got ${typeof data}`);
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

function validate(data, template) {
    let dataProperties = Object.getOwnPropertyNames(data);
    let templateProperties = Object.getOwnPropertyNames(template);

    let unexpectedProperties = _.difference(
        Object.getOwnPropertyNames(data),
        Object.getOwnPropertyNames(template)
    );

    if (unexpectedProperties.length) {
        throw new Error(`unexpected properties found in data: ${unexpectedProperties}`);
    }

    let expectedProperties = _.intersection(
        Object.getOwnPropertyNames(data),
        Object.getOwnPropertyNames(template)
    );

    _.each(expectedProperties, expectedProperty => {
        data[expectedProperty]::validateProperty(template[expectedProperty]);
    });
}

export default class ModelObject {
    constructor(data, template) {
        data = data || {};

        this::validate(data, template);
        this::apply(data, template);

        return Wrapper.getProxy(this);
    }
}