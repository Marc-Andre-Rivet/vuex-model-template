import _ from 'lodash';

export default class ProxyWrapper {
    static getProxy(target) {
        /*#if vuex_model_template_dev*/
        let keys = _.keys(target);

        keys.forEach(key => {
            if (typeof target[key] === 'object' && !Array.isArray(target[key])) {
                target[key] = ProxyWrapper.getProxy(target[key]);
            }
        });

        return new Proxy(target, {
            get(t, key) {
                if (keys.indexOf(key) === -1) {
                    throw new Error(`unknown property '${key}'`);
                }

                return t[key];
            }
        });
        /*#else*/
        return target;
        /*#endif*/
    }
}