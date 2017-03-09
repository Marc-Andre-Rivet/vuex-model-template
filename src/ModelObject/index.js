import _ from 'lodash';
import { act } from 'vuex/mixin';

import TYPE from 'enumerations/type';

import applyData from 'ModelObject/applyData';
import generateActions from 'ModelObject/generateActions';
import generateModule from 'ModelObject/generateModule';
import generateObjectId from 'ModelObject/generateObjectId';
import getActions from 'ModelObject/getActions';

import Wrapper from 'ProxyWrapper';


let wm = new WeakMap();

export default class ModelObject {
    constructor(
        store,
        data,
        template,
        customActions = {}
    ) {
        wm.set(this, {
            $moduleId: this::generateObjectId(),
            $store: store
        });

        this::applyData(data, template);
        this::generateActions(template, customActions);

        let proxy = Wrapper.getProxy(this);
        let module = proxy::generateModule(template, customActions);

        console.log(module);

        return proxy;
    }

    get $moduleId() {
        return wm.get(this).$moduleId;
    }

    get $store() {
        return wm.get(this).$store;
    }
}