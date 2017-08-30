import _ from 'lodash';

let __objectProperties = Object.getOwnPropertyNames(Object.prototype);
let wm = new WeakMap();

export class ProxyWrapper {
    static getProxy(target) {
        /*#if dev*/
        let keys = _.keys(target);

        target = new Proxy(target, {
            get(t, key) {
                if (keys.indexOf(key) === -1) {
                    throw new Error(`unknown property '${key}' in target`);
                }

                return t[key];
            }
        });

        /*#endif*/

        return target;
    }
}

let customProperties = [];
export default class VuexProxyWrapper {
    static setCustomProperties(properties = []) {
        if (!_.isArray(properties)) {
            throw new Error('expected properties to be an array of strings');
        }

        customProperties = properties;
    }

    static getProxy(target) {
        /*#if dev*/
        let keys = _.keys(target);

        keys.forEach(key => {
            if (typeof target[key] === 'object' &&
                !Array.isArray(target[key]) &&
                !wm.get(target[key])
            ) {
                target[key] = VuexProxyWrapper.getProxy(target[key]);
                wm.set(target[key], true);
            }
        });

        target = new Proxy(target, {
            get(t, key) {
                if (__objectProperties.indexOf(key) === -1 &&
                    typeof key !== 'symbol' && // synthetic toString, etc. functions (possibly related to VueJS)
                    key !== '__ob__' && // VueJS models
                    key !== '_isVue' && // VueJS models
                    key !== 'actions' && // vuex-model-template
                    key !== 'properties' && // vuex-model-template
                    key !== 'then' && // promises & thenable objects
                    key !== 'toJSON' && // JSON.stringify
                    (key.length && key[0] !== '$') &&
                    keys.indexOf(key) === -1 &&
                    customProperties.indexOf(key) === -1
                ) {
                    throw new Error(`unknown property '${key}' in target`);
                }

                return t[key];
            }
        });
        /*#endif*/

        return target;
    }
}