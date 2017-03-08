import _ from 'lodash';
import { act } from 'vuex/mixin';
import moduleFn from 'ModelObject/module';
import validate from 'ModelObject/validate';
import Wrapper from 'ProxyWrapper';

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
        this[property] = template[property].defaultValue;
    });
}

let prefixes = [];
function defineActions(template) {
    let actions = {};

    let properties = Object.getOwnPropertyNames(template);
    _.each(properties, property => {
        let propertyActions = template[property].actions;
        _.forOwn(template[property].actions, (value, key) => {
            let actionName = `[${this.moduleId}]/${prefixes.join('/')}${prefixes.length ? '/' : ''}${property}:${key}`;

            if (key === 'set' || key === 'clear') {
                actions[value] = (...args) => {
                    console.log('executing', value, ...args);
                    let target = { $store: store };
                    target::act(actionName, ...args);
                };
            } else if (key === 'add' || key === 'remove') {
                actions[property] = actions[property] || {};
                actions[property][value] = actionName;
            } else {
                throw new Error(`unexpected action '${key}'`);
            }
        });

        if (template[property].properties) {
            prefixes.push(property);
            actions[property] = this::defineActions(template[property].properties);
            prefixes.splice(-1);
        }
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

let store;
export function setStore(value) {
    store = value;
}

export default class ModelObject {
    constructor(
        data,
        template,
        module = { actions: {}, mutations: {} }
    ) {
        if (!store) {
            throw 'You must register the store before creating model objects.';
        }

        let id = this::getId();
        wm.set(this, {
            moduleId: id
        });

        data::validate(template);
        this::apply(data, template);

        this.actions = this::defineActions(template);

        // let proxy = Wrapper.getProxy(this);
        this::moduleFn(store, template);

        // return proxy;
    }

    get moduleId() {
        return wm.get(this).moduleId;
    }
}