import _ from 'lodash';

import ModelObject from 'ModelObject';
import TYPE from 'enumerations/type';

// const PROPERTY_TEMPLATE = {
//     type: {
//         type: TYPE.Symbol,
//         defaultValue: TYPE.Any
//     },
//     defaultValue: {
//         type: TYPE.Any,
//         defaultValue: undefined
//     },
//     sideEffets: {
//         type: TYPE.Array,
//         defaultValue: []
//     },
//     actions: {
//         set: {
//             type: TYPE.String,
//             defaultValue: undefined
//         },
//         clear: {
//             type: TYPE.String,
//             defaultValue: undefined
//         },
//         add: {
//             type: TYPE.String,
//             defaultValue: undefined
//         },
//         remove: {
//             type: TYPE.String,
//             defaultValue: undefined
//         }
//     },
//     properties: {
//         type: TYPE.Object,
//         defaultValue: {}
//     }
// };

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
        defaultValue: {},
        sideEffects: [],
        actions: {
            set: 'setMeta'
        }
    },
    meta2: {
        type: TYPE.Complex,
        properties: {
            sub: {
                type: TYPE.Any,
                defaultValue: undefined,
                sideEffects: [],
                actions: {
                    set: 'setSub'
                }
            },
            sub2: {
                type: TYPE.String,
                defaultValue: undefined,
                sideEffects: [],
                actions: {
                    set: 'setSub2'
                }
            }
        },
        defaultValue: {},
        sideEffects: [],
        actions: {
            set: 'setMeta2'
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
            add: 'add',
            clear: 'clearTags',
            remove: 'remove',
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
    meta2: {
        sub: 'sub',
        sub2: '3'
    },
    version: 345,
    name: 'name',
    description: 'description',
    tags: ['1', '2', '3']
}, MODEL_OBJECT_TEMPLATE);
console.log(obj);