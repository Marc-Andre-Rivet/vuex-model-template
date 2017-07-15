import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import VuexModelObject from 'vuex-model-template';

const store = new Vuex.Store({
    strict: true,
    state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules: {}
});

VuexModelObject.use(store);

import 'example-app';

let domReady = new Promise(resolve => {
    document.addEventListener('DOMContentLoaded', resolve, false);
});

domReady.then(() => {
    new Vue({
        el: '#v-app',
        ...{
            store: store
        }
    });
}).catch(console.error);