import _ from 'lodash';

let wm = new WeakMap();
export default class ProxyWrapper {
    static getProxy(target) {
        /*#if dev*/
        let keys = _.keys(target);

        keys.forEach(key => {
            if (typeof target[key] === 'object' &&
                !Array.isArray(target[key]) &&
                !wm.get(target[key])
            ) {
                target[key] = ProxyWrapper.getProxy(target[key]);
                wm.set(target[key], true);
            }
        });

        target = new Proxy(target, {
            get(t, key) {
                if (typeof key !== 'symbol' && // synthetic toString, etc. functions (possibly related to VueJS)
                    key !== '__ob__' && // protection for VueJS models
                    key !== '_isVue' &&
                    key !== 'toJSON' && // JSON.stringify
                    key !== 'actions' &&
                    key !== '$moduleId' &&
                    key !== '$store' &&
                    key !== '$template' &&
                    key !== 'then' &&
                    keys.indexOf(key) === -1
                ) {
                    throw new Error(`unknown property '${key}'`);
                }

                return t[key];
            }
        });
        /*#endif*/

        return target;
    }
}