import _ from 'lodash';

import ModelObject from 'ModelObject';
import TYPE from 'enumerations/type';

const EDITABLE_OBJECT_TEMPLATE = {
    dirty: {
        type: TYPE.Boolean,
        defaultValue: false,
        sideEffects: [],
        actions: {
            set: 'setDirty'
        }
    }
};

const DATABASE_OBJECT_TEMPLATE = {
    customerID: {
        type: TYPE.Any,
        defaultValue: undefined,
        sideEffects: [],
        actions: {
            set: 'setCustomerID'
        }
    },
    id: {
        type: TYPE.Any,
        defaultValue: undefined,
        sideEffects: [],
        actions: {
            set: 'setId'
        }
    },
    meta: {
        type: TYPE.Object,
        additionalProperties: true,
        properties: {

        },
        defaultValue: {},
        sideEffects: [],
        actions: {
            set: 'setMeta'
        }
    },
    version: {
        type: TYPE.Any,
        defaultValue: undefined,
        sideEffects: [],
        actions: {
            set: 'setVersion'
        }
    }
};

const MODEL_OBJECT_TEMPLATE = _.defaults({
    name: {
        type: TYPE.String,
        defaultValue: undefined,
        sideEffects: [{
            property: 'dirty',
            value: true
        }],
        actions: {
            set: 'setName'
        }
    },
    description: {
        type: TYPE.String,
        defaultValue: undefined,
        sideEffects: [{
            property: 'dirty',
            value: true
        }],
        actions: {
            set: 'setDescription'
        }
    },
    tags: {
        type: TYPE.Array,
        items: {
            type: TYPE.String
        },
        defaultValue: [],
        sideEffects: [{
            property: 'dirty',
            value: true
        }],
        actions: {
            add: 'addTag',
            clear: 'clearTags',
            remove: 'removeTag',
            set: 'setTags'
        }
    }
}, EDITABLE_OBJECT_TEMPLATE, DATABASE_OBJECT_TEMPLATE);

let obj = new ModelObject({
    dirty: false,
    id: 123,
    customerID: 234,
    meta: {
        a: 'a',
        b: 'b'
    },
    version: 345,
    name: 'name',
    description: 'description',
    tags: ['1', '2', '3']
}, MODEL_OBJECT_TEMPLATE);
console.log(obj);