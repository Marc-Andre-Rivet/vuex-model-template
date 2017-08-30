import AbstractModelObject from 'AbstractModelObject';
import wrapInstance from 'AbstractModelObject/wrapInstance';

import generateActions from 'VuexModelObject/generateActions';
import generateModule from 'VuexModelObject/generateModule';
import generateObjectId from 'VuexModelObject/generateObjectId';

let _store;
let wm = new WeakMap();

export default class VuexModelObject extends AbstractModelObject {
    constructor(
        data = {},
        { template /*= {}*/, actions /*= {}*/, properties /*= {}*/ }
    ) {
        if (!_store) {
            throw new Error('Run VuexModelObject.use($store) before calling ctor');
        }

        if (!template) {
            throw new Error('options { template } must be defined');
        }

        if (!actions) {
            throw new Error('options { actions } must be defined');
        }

        if (!properties) {
            throw new Error('options { properties } must be defined');
        }

        data = data || {};

        super(data, {
            template: template,
            actions: actions,
            properties: properties
        });

        wm.set(this, {
            $objectId: this::generateObjectId(),
            $store: _store
        });
    }

    $initialize() {

    }

    $onCreate() {
        /*#if log*/
        console.log('VuexModelObject.$onCreate', this);
        /*#endif*/

        return super.$onCreate().then(() => {
            /*#if log*/
            console.log('VuexModelObject.$onCreate > generate actions', this);
            /*#endif*/

            return this::generateActions();
        }).then(() => {
            /*#if log*/
            console.log('VuexModelObject.$onCreate > generate module', this);
            /*#endif*/
        }).then(() => {
            /*#if log*/
            console.log('VuexModelObject.$onCreate > initialize', this);
            /*#endif*/
        });
    }

    get $actions() {
        return this.$options.actions;
    }

    get $moduleId() {
        return this.constructor.name;
    }

    get $properties() {
        return this.$options.properties;
    }

    get $store() {
        return wm.get(this).$store;
    }

    get $template() {
        return this.$options.template;
    }

    get $waitReady() {
        let __private = wm.get(this);

        __private.waitReady =
            __private.waitReady ||
            super.$waitReady.then(() => {
                return Promise.resolve(this::wrapInstance(target => {
                    return target::generateModule(target.$template, target.$module);
                })).then(target => {
                    return Promise.resolve(target::this.$initialize()).then(() => target);
                });
            });

        return __private.waitReady;
    }

    static use(store) {
        if (!_store) {
            _store = store;
        } else {
            throw new Error('store already set');
        }
    }
}