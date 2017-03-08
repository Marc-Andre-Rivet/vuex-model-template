import _ from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';

import ModelObject from 'ModelObject';
import TYPE from 'enumerations/type';

Vue.use(Vuex);

let store = new Vuex.Store({
    strict: true,
    modules: {}
});

const EDITABLE_OBJECT_TEMPLATE = {
    dirty: {
        type: TYPE.Boolean,
        defaultValue: false
    }
};

const DATABASE_OBJECT_TEMPLATE = {
    customerID: {
        type: TYPE.Any,
        defaultValue: undefined
    },
    id: {
        type: TYPE.Any,
        defaultValue: undefined
    },
    meta: {
        type: TYPE.Object,
        defaultValue: {}
    },
    meta2: {
        type: TYPE.Complex,
        properties: {
            sub: {
                type: TYPE.Any,
                defaultValue: undefined
            },
            sub2: {
                type: TYPE.String,
                defaultValue: undefined
            }
        },
        defaultValue: {}
    },
    version: {
        type: TYPE.Any,
        defaultValue: undefined
    }
};

const MODEL_OBJECT_TEMPLATE = _.defaults({
    name: {
        type: TYPE.String,
        defaultValue: undefined,
        sideEffects: [{
            action: 'set',
            property: 'dirty',
            value: true
        }]
    },
    description: {
        type: TYPE.String,
        defaultValue: undefined,
        sideEffects: [{
            action: 'set',
            property: 'dirty',
            value: true
        }]
    },
    tags: {
        type: TYPE.Array,
        items: {
            type: TYPE.String
        },
        defaultValue: [],
        sideEffects: [{
            action: 'set',
            property: 'dirty',
            value: true
        }]
    },
    pouet: {
        type: TYPE.ModelObject,
        defaultValue: undefined
    }
}, EDITABLE_OBJECT_TEMPLATE, DATABASE_OBJECT_TEMPLATE);

class SubObject extends ModelObject {
    constructor(store, data) {
        super(store, data, MODEL_OBJECT_TEMPLATE);
    }
}

let obj = new ModelObject(store, {
    dirty: false,
    id: 123,
    customerID: 234,
    meta: {
        a: 'a',
        b: 'b'
    },
    meta2: {
        sub: 'sub',
        sub2: '3'
    },
    version: 345,
    name: 'name',
    description: 'description',
    tags: ['1', '2', '3'],
    pouet: new SubObject(store, {})
}, MODEL_OBJECT_TEMPLATE);

console.log('created');
console.log('name: ', obj.name);
obj.actions.name.set('the name!');
obj.actions.tags.clear();
console.log('name: ', obj.name);
console.log('tags: ', obj.tags);
obj.actions.tags.set([1, 2, 3]);
console.log('tags: ', obj.tags);
obj.actions.tags.add(4);
obj.actions.tags.remove(2);
console.log('tags: ', obj.tags);
console.log('dirty: ', obj.dirty);
obj.pouet.actions.name.set('sub name!');
console.log('sub name: ', obj.pouet.name, obj.name);