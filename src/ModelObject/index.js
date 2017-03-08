import _ from 'lodash';
import { act } from 'vuex/mixin';
import moduleFn from 'ModelObject/module';
import validate from 'ModelObject/validate';
import Wrapper from 'ProxyWrapper';

import TYPE from 'enumerations/type';

function apply(data, template) {
    let expectedProperties = _.intersection(
        _.keys(data),
        _.keys(template)
    );

    _.defaults(this, data);

    let defaultProperties = _.difference(
        _.keys(template),
        _.keys(data)
    );

    _.each(defaultProperties, property => {
        if (template[property].type !== TYPE.Complex) {
            this[property] = _.cloneDeep(template[property].defaultValue);
        } else {
            console.log('apply default value to complex type', property);
            this[property] = {};
            this[property]::apply(data ? data[property] : undefined, template[property].properties);
        }
    });
}

function getActions(type) {
    if (type === TYPE.Array) {
        return ['set', 'add', 'remove', 'clear'];
    } else {
        return ['set'];
    }
}

let prefixes = [];
function visitUserActions(template) {
    let actions = {};

    let properties = Object.getOwnPropertyNames(template);
    _.each(properties, property => {
        actions[property] = {};

        let propertyActions = template[property].actions;
        _.forOwn(getActions(template[property].type), key => {
            let actionName = `[${this.$moduleId}]/${prefixes.join('/')}${prefixes.length ? '/' : ''}${property}:${key}`;

            actions[property][key] = (...args) => {
                console.log('do', actionName, ...args);
                this::act(actionName, ...args);
            };
        });

        if (template[property].properties) {
            prefixes.push(property);
            actions[property] = _.extend(actions[property], this::visitUserActions(template[property].properties));
            prefixes.splice(-1);
        }
    });

    return actions;
}

function visitCustomActions(customModule) {
    let actions = {};

    _.forOwn(customModule, (value, key) => {
        let actionName = `[${this.$moduleId}]:${key}`;

        actions[key] = (...args) => {
            console.log('do', actionName, ...args);
            this::act(actionName, ...args);
        };
    });

    return actions;
}

let ids = {};
let wm = new WeakMap();

function getId() {
    let key = this.constructor.name;
    ids[key] = ids[key] || 0;

    return `${key}/${ids[key]++}`;
}

export default class ModelObject {
    constructor(
        store,
        data,
        template,
        module = { }
    ) {
        if (!store) {
            throw 'You must register the store before creating model objects.';
        }

        let id = this::getId();
        wm.set(this, {
            $moduleId: id,
            $store: store
        });

        data::validate(template);
        this::apply(data, template);

        this.actions = {
            ...this::visitUserActions(template),
            ...this::visitCustomActions(module)
        };


        // let proxy = Wrapper.getProxy(this);
        this::moduleFn(template, module);

        // return proxy;
    }

    get $moduleId() {
        return wm.get(this).$moduleId;
    }

    get $store() {
        return wm.get(this).$store;
    }
}