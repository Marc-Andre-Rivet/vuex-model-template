import _ from 'lodash';

let stack = [];

function throwError(type, data) {
    throw new Error(`expected '${type.toString()}' but got '${typeof data}' in '${stack.join('.')}'`);
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
            throw new Error(`unexpected type '${template.type}'`);
    }
}

function validate(template) {
    let unexpectedProperties = _.difference(
        _.keys(this),
        _.keys(template)
    );

    if (unexpectedProperties.length) {
        throw new Error(`unexpected properties found in '${stack.join('.') || 'data'}': '${unexpectedProperties}'`);
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

export default template => {
    stack = [];
    this::validate(template);
};