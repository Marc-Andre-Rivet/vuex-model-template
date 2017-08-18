import AbstractModelObject from 'AbstractModelObject';
import wrapInstance from 'AbstractModelObject/wrapInstance';

import generateActions from 'VuexModelObject/generateActions';
import generateModule from 'VuexModelObject/generateModule';
import generateObjectId from 'VuexModelObject/generateObjectId';

let _store;
let wm = new WeakMap();

export default class VuexModelObject extends AbstractModelObject {
    constructor(data, template, module) {
        if (!_store) {
            throw new Error('Run VuexModelObject.use($store) before calling ctor');
        }

        template = template || {};
        module = module || {};

        super(data, {
            template: template,
            module: module
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

            return this::generateActions(this.$template, this.$module);
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

    get $module() {
        return this.$options.module;
    }

    get $moduleId() {
        return this.constructor.name;
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