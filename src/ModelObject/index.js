import applyData from 'ModelObject/applyData';
import generateActions from 'ModelObject/generateActions';
import generateModule from 'ModelObject/generateModule';
import generateObjectId from 'ModelObject/generateObjectId';
import persist from 'ModelObject/persist';

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
            $store: store,
            $template: template
        });

        this::applyData(data, template);
        this::generateActions(template, customActions);

        let proxy = Wrapper.getProxy(this);
        proxy::generateModule(template, customActions);

        return proxy;
    }

    get $moduleId() {
        return wm.get(this).$moduleId;
    }

    get $store() {
        return wm.get(this).$store;
    }

    get $template() {
        return wm.get(this).$template;
    }

    toJSON() {
        return this::persist({}, this.$template);
    }
}