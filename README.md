# vuex-model-template
Generation of vuex module from object template.

Alpha version. More information coming soon.

## Objective
Working with Vuex, I spent a lot of time writing and perfecting boilerplate code, logic surrounding calls for actions/mutations and managing side effects.

This is my attempt at simplifying the boilerplate generation while adding support for:
* enforcing expected properties
* type validation
* auto-generated actions accessible directly on the object's instance
* automatic side-effects management
* template based serialization & deserialization

## Getting Started
### Webpack Configuration
If you uglify your code, do not use the '-p' flag on the webpack executable. Also, make sure to use the mangle option shown below, otherwise it won't work as expected.

```javascript
mangle: {
    keep_fnames: true /* Prevents function names (class names) from being compressed */
}
```

### Setup Code
```javascript
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import VuexModelObject, { TYPE } from 'vuex-model-template';

const store = Vuex.Store({
    actions: {},
    mutations: {},
    modules: {}
});

VuexModelObject.use(store);
```

### Usage
```javascript
const template = {
    aAny: {
        type: TYPE.Any,
        defaultValue: undefined
    },
    aArray: {
        type: TYPE.Array,
        defaultValue: [],
        items: {
            type: TYPE.String,
        }
    },
    aBoolean: {
        type: TYPE.Boolean,
        defaultValue: false
    },
    aComplex: {
        type: TYPE.Complex,
        // defaultValue: {} <-- this property is not used for Complex
        properties: {
            aProp: {
                type: TYPE.String,
                // etc.
            }
        }
    },
    aNumber: {
        type: TYPE.Number,
        defaultValue: 10
    },
    aObject: {
        type: TYPE.Object,
        defaultValue: undefined
    },
    aString: {
       type: TYPE.String
       defaultValue: 'defined'
    },
    aSymbol: {
        type: TYPE.Symbol,
        defaultValue: undefined
    }
};

const module = {
    doAction(aNumber) {
        return this.actions.aNumber.set(aNumber);
    }
};

class FooClass extends VuexModelObject {
    constructor(data) {
        super(data, template, module);
    }

    static hydrate(rawData) {
        return VuexModelObject.hydrate(rawData, template).then(data => {
            return FooClass(data);
        });
    }
}

let foo = new FooClass();
console.log(foo.aNumber); // 10
console.log(foo.aString); // 'defined'
console.log(foo.invalidProp); // throws exception if dev || instrumented builds (wrapped in proxy)

// Modify values through wrapped Vuex actions
foo.actions.aNumber.set(20).then(res => {
    console.log(foo.aNumber); // 20
});
console.log(foo.aNumber); // 10

// Call custom actions
foo.actions.doAction(30).then(res => {
    console.log(foo.aNumber); // 30
});

// Actions op an array
foo.actions.aArray.clear().then(() => {
    return foo.actions.aArray.add('new entry');
}).then(() => {
    return foo.actions.aArray.remove('new entry');
}).then(() => {
    return foo.actions.aArray.set(['123', '234', '345']);
});

// Custom serialization and deserialization of properties
// For example: 'aChildObject' is a link to another object we wish to save as a string (id) and to expand as a full-fledged object whem running.
template['aChildObject'] = {
    type: TYPE.Object,
    serialize(item) {
        return item.id;
    },
    deserialize(id) {
        // This call can be synchronous or asynchronous
        return ChildObjectService.get(id);
    }
}

// Set 'aChildObject'
foo.actions.aChildObject.set({
    id: 'abc',
    prop1: 'prop1'
});

let json = JSON.parse(foo.toJSON());
console.log(json.aChildObject); // 'abc'
```

### Usage Example
Go check the [Example Project](example)
