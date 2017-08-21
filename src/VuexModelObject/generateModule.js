import _ from 'lodash';
import { mutate } from 'vuex/mixin';
import { validateProperty } from 'ModelObject/applyData';
import getActions from 'VuexModelObject/getActions';

let prefixes = [];
function visitActions(template) {
    let actions = {};

    let properties = Object.getOwnPropertyNames(template);
    _.each(properties, property => {
        _.forOwn(getActions(template[property]), key => {
            let actionName = `[${this.$moduleId}]/${prefixes.join('/')}${prefixes.length ? '/' : ''}${property}:${key}`;

            actions[actionName] = ({ commit }, [target, value]) => {
                /*#if log*/
                console.log('act', actionName, target, value);
                /*#endif*/
                commit(actionName, [target, value]);

                if (_.isFunction(template[property].corollary)) {
                    /*#if log*/
                    console.log('act -> corollary', actionName, target, value);
                    /*#endif*/
                    target::template[property].corollary(value);
                }
            };
        });

        if(template[property].properties) {
            prefixes.push(property);
            _.extend(actions, this::visitActions(template[property].properties));
            prefixes.splice(-1);
        }
    });

    return actions;
}

function visitMutations(template) {
    let mutations = {};

    let properties = Object.getOwnPropertyNames(template);
    _.each(properties, property => {
        _.forOwn(getActions(template[property]), key => {
            let actionName = `[${this.$moduleId}]/${prefixes.join('/')}${prefixes.length ? '/' : ''}${property}:${key}`;

            let chain = _.cloneDeep(prefixes);

            if (key === 'set') {
                mutations[actionName] = (state, args) => {
                    let [target, value] = args;
                    /*#if log*/
                    console.log('mutate', actionName, target, value);
                    /*#endif*/

                    value::validateProperty(template[property]);

                    let array = _.reduce(chain, (t, prop) => t[prop], target)[property];
                    if (_.isArray(array)) {
                        array.splice(0);
                        array.push(...value);
                    } else {
                        _.reduce(chain, (t, prop) => t[prop], target)[property] = value;
                    }
                };
            } else if (key === 'clear') {
                mutations[actionName] = (state, args) => {
                    let [target, value] = args;
                    /*#if log*/
                    console.log('mutate', actionName, target, value);
                    /*#endif*/
                    _.reduce(chain, (t, prop) => t[prop], target)[property].splice(0);
                };
            } else if (key === 'add') {
                mutations[actionName] = (state, args) => {
                    let [target, value] = args;
                    /*#if log*/
                    console.log('mutate', actionName, target, value);
                    /*#endif*/

                    value::validateProperty(template[property].items);
                    _.reduce(chain, (t, prop) => t[prop], target)[property].push(value);
                };
            } else if (key === 'remove') {
                mutations[actionName] = (state, args) => {
                    let [target, value] = args;
                    /*#if log*/
                    console.log('mutate', actionName, target, value);
                    /*#endif*/
                    let array = _.reduce(chain, (t, prop) => t[prop], target)[property];

                    // https://vuejs.org/v2/guide/list.html#Caveats
                    let index = array.indexOf(value);
                    if (index !== -1) {
                        array.splice(index, 1);
                    } else {
                        /*#if log*/
                        console.log(`item ${value} not found`);
                        /*#endif*/
                    }
                };
            }
        });

        if(template[property].properties) {
            prefixes.push(property);
            _.extend(mutations, this::visitMutations(template[property].properties));
            prefixes.splice(-1);
        }
    });

    return mutations;
}

let wm = {};
export default function () {
    if (wm[this.$moduleId]) {
        this::mutate(`add${this.$moduleId}`, wm[this.$moduleId], this);
        return;
    }

    wm[this.$moduleId] = {
        items: [this]
    };

    let mappedModule = {};
    _.forOwn(module.actions || module, (value, key) => {
        mappedModule[`[${this.$moduleId}]:${key}`] = value;
    });
    _.forOwn(module.properties, (value, key) => {
        mappedModule[`[${this.$moduleId}]:${key}`] = value;
    });

    return this.$store.registerModule(this.$moduleId, {
        state: wm,
        actions: {
            ...this::visitActions(this.$template),
            ...mappedModule
        },
        mutations: {
            ...this::visitMutations(this.$template),
            [`add${this.$moduleId}`](state, [type, obj]) {
                type.items.push(obj);
            }
        }
    });
}