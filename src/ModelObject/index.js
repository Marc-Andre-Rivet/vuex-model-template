import applyData from 'ModelObject/applyData';
import deserialize from 'ModelObject/deserialize';
import generateActions from 'ModelObject/generateActions';
import generateModule from 'ModelObject/generateModule';
import generateObjectId from 'ModelObject/generateObjectId';
import persist from 'ModelObject/persist';

import Wrapper from 'ProxyWrapper';

let _store;
let wm = new WeakMap();

export default class ModelObject {
    constructor(
        data,
        template,
        customActions = {}
    ) {
        wm.set(this, {
            $objectId: this::generateObjectId(),
            $store: _store,
            $template: template
        });

        if (this::applyData(data, template)) {
            throw new Error('applyData needs to resolve default values asynchronously. Use \'fromRaw\' before using the consrtructor');
        }

        this::generateActions(template, customActions);

        let proxy = Wrapper.getProxy(this);
        proxy::generateModule(template, customActions);

        return proxy;
    }

    get $moduleId() {
        return this.constructor.name;
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

    static fromJSON(data, template) {
        console.warn(`'fromJSON' deprecated, use 'hydrate' instead`);
        return ModelObject.hydrate(data, template);
    }

    static hydrate(data, template) {
        /*#if log*/
        console.log('hydrate', data, template);
        /*#endif*/

        return deserialize(data, template);
    }

    static fromRaw(data, template) {
        return ModelObject.hydrate(data, template).then(raw => {
            let dest = {};
            return Promise.resolve(dest::applyData(raw, template)).then(() => dest);
        });
    }

    static use(store) {
        if (!_store) {
            _store = store;
        } else {
            throw new Error('store already set');
        }
    }
}