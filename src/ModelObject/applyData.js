import _ from 'lodash';
import TYPE from 'enumerations/type';

let prefixes = [];

function throwTypeError(type, data) {
    throw new Error(`expected '${type.toString()}' but got '${typeof data}' in '${prefixes.join('.')}'`);
}

function throwPersistenceError(type) {
    throw new Error(`expected '${prefixes.join('.')}' of type '${type.toString()}' to be transient`);
}

function throwReadonlyError(type) {
    throw new Error(`expected '${prefixes.join('.')}' of type '${type.toString()}' to be readonly`);
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
                throwTypeError(template.type, this);
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
                throwTypeError(template.type, this);
            }
            break;
        case TYPE.Complex:
            if (!_.isObject(this)) {
                throwTypeError(template.type, this);
            }

            this::validate(template.properties);
            break;
        case TYPE.Function:
            if (!_.isFunction(this)) {
                throwTypeError(template.type, this);
            }

            if (!template.transient) {
                throwPersistenceError(template.type);
            }

            if (!template.readonly) {
                throwReadonlyError(template.type);
            }
            break;
        case TYPE.Number:
            if (!_.isNumber(this)) {
                throwTypeError(template.type, this);
            }
            break;
        case TYPE.Object:
            if (!_.isObject(this)) {
                throwTypeError(template.type, this);
            }
            break;
        case TYPE.String:
            if (!_.isString(this)) {
                throwTypeError(template.type, this);
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

function apply(rawData, data, template, promises = []) {
    let defaultProperties = _.difference(
        _.keys(template),
        _.keys(data)
    );

    _.each(defaultProperties, property => {
        if (template[property].type !== TYPE.Complex) {
            if (template[property].type === TYPE.Function &&
                _.isFunction(template[property].defaultValue)
            ) {
                this[property] = template[property].defaultValue.bind(this);
            } else if (_.isFunction(template[property].defaultValue)) {
                let value = template[property].defaultValue(rawData);

                if (value.then) {
                    promises.push(Promise.resolve(value).then(result => {
                        this[property] = result;
                    }));
                } else {
                    this[property] = value;
                }
            } else {
                this[property] = _.cloneDeep(template[property].defaultValue);
            }
        } else {
            /*#if log*/
            console.log('apply default value to complex type', property);
            /*#endif*/
            this[property] = {};

            let propData = data && data[property];
            this[property]::apply(rawData, propData, template[property].properties, promises);
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
            this[property]::apply(rawData, data[property], template[property].properties, promises);
        }
    });

    return promises;
}

export default function(data, template) {
    if (!this) {
        return;
    }

    prefixes = [];
    data::validate(template);

    _.defaults(this, data);
    let promises = this::apply(data, data, template) || [];

    /*#if log*/
    if (promises.length) {
        console.log('applying defaults', data);
    }
    /*#endif*/

    if (promises.length) {
        return Promise.all(promises).then(() => data);
    }

}