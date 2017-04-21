import _ from 'lodash';
import TYPE from 'enumerations/type';

let prefixes = [];

function throwError(type, data) {
    throw new Error(`expected '${type.toString()}' but got '${typeof data}' in '${prefixes.join('.')}'`);
}

export function validateProperty(template) {
    if (_.isUndefined(this)) {
        return;
    }

    if (!template) {
        return;
    }

    switch (template.type) {
        case TYPE.Any:
            break;
        case TYPE.Array:
            if (!_.isArray(this)) {
                throwError(template.type, this);
            } else if (!template.items) {
                break;
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

            this::validate(template.properties);
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
            throw new Error(`unexpected type`);
    }
}

function validate(template) {
    let unexpectedProperties = _.difference(
        _.keys(this),
        _.keys(template)
    );

    /*#if dev*/
    if (unexpectedProperties.length) {
        let message = `unexpected properties found in '${prefixes.join('.') || 'data'}': '${unexpectedProperties}'`;
        throw new Error(message);
    }
    /* #endif */

    let expectedProperties = _.intersection(
        _.keys(this),
        _.keys(template)
    );

    _.each(expectedProperties, expectedProperty => {
        prefixes.push(expectedProperty);
        this[expectedProperty]::validateProperty(template[expectedProperty]);
        prefixes.splice(-1);
    });
}

function apply(data, template) {
    let defaultProperties = _.difference(
        _.keys(template),
        _.keys(data)
    );

    _.each(defaultProperties, property => {
        if (template[property].type !== TYPE.Complex) {
            if (_.isFunction(template[property].defaultValue)) {
                this[property] = template[property].defaultValue();
            } else {
                this[property] = _.cloneDeep(template[property].defaultValue);
            }
        } else {
            /*#if log*/
            console.log('apply default value to complex type', property);
            /*#endif*/
            this[property] = {};

            let propData = data && data[property];
            this[property]::apply(propData, template[property].properties);
        }
    });

    let definedProperties = _.intersection(
        _.keys(template),
        _.keys(data)
    );

    _.each(definedProperties, property => {
        if (template[property].type === TYPE.Complex && data[property]) {
            /*#if log*/
            console.log('apply default to properties of complex type', property);
            /*#endif*/
            this[property]::apply(data[property], template[property].properties);
        }
    });
}

export default function(data, template) {
    if (!this) {
        return;
    }

    prefixes = [];
    data::validate(template);

    _.defaults(this, data);
    this::apply(data, template);
}