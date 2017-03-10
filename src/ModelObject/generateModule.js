import _ from 'lodash';
// import { mutate } from 'vuex/mixin';
import { validateProperty } from 'ModelObject/applyData';
import getActions from 'ModelObject/getActions';

let prefixes = [];
function visitActions(template) {
    let actions = {};

    let properties = Object.getOwnPropertyNames(template);
    _.each(properties, property => {
        _.forOwn(getActions(template[property].type), key => {
            let actionName = `[${this.$moduleId}]/${prefixes.join('/')}${prefixes.length ? '/' : ''}${property}:${key}`;

            actions[actionName] = ({ commit }, [target, value]) => {
                /*#if log*/
                console.log('act', actionName, target, value);
                /*#endif*/
                commit(actionName, [target, value]);

                if (_.isFunction(template[property].corollary)) {
                    target::template[property].corollary();
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
        _.forOwn(getActions(template[property].type), key => {
            let actionName = `[${this.$moduleId}]/${prefixes.join('/')}${prefixes.length ? '/' : ''}${property}:${key}`;

            let chain = _.cloneDeep(prefixes);

            if (key === 'set') {
                mutations[actionName] = (state, args) => {
                    let [target, value] = args;
                    /*#if log*/
                    console.log('mutate', actionName, target, value);
                    /*#endif*/

                    value::validateProperty(template[property]);
                    _.reduce(chain, (t, prop) => t[prop], target)[property] = value;
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
export default function (template, module) {
    if (wm[this.$moduleId]) {
        wm[this.$moduleId].push(this);
        return;
    }

    wm[this.$moduleId] = [this];

    let mappedModule = {};
    _.forOwn(module, (value, key) => {
        mappedModule[`[${this.$moduleId}]:${key}`] = value;
    });

    return this.$store.registerModule(this.$moduleId, {
        state: wm[this.$moduleId],
        actions: {
            ...this::visitActions(template),
            ...mappedModule
        },
        mutations: {
            ...this::visitMutations(template),
            $add(state, obj) {
                console.log('$add', state, obj);
                state.push(obj);
            }
        }
    });
}