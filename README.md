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

VuexModel.use(store);
```

### Usage Example
Go check the [Example](example)