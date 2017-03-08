import _ from 'lodash';

import TYPE from 'enumerations/type';

function getActions(type) {
    if (type === TYPE.Array) {
        return ['set', 'add', 'remove', 'clear'];
    } else {
        return ['set'];
    }
}

let prefixes = [];
function visitActions(template) {
    let actions = {};

    let properties = Object.getOwnPropertyNames(template);
    _.each(properties, property => {
        _.forOwn(getActions(template[property].type), key => {
            let actionName = `[${this.$moduleId}]/${prefixes.join('/')}${prefixes.length ? '/' : ''}${property}:${key}`;

            actions[actionName] = ({ commit }, value) => {
                console.log('act', actionName, value, this);
                commit(actionName, value);
                _.each(template[property].sideEffects, sideEffect => {
                    let sideEffectName = `[${this.$moduleId}]/${sideEffect.property}:${sideEffect.action}`;

                    console.log('act/side-effect', sideEffectName, sideEffect.value);
                    commit(sideEffectName, sideEffect.value);
                });
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
                mutations[actionName] = (state, value) => {
                    console.log('mutate', actionName, state, value);
                    _.reduce(chain, (t, prop) => t[prop], state)[property] = value;
                };
            } else if (key === 'clear') {
                mutations[actionName] = (state, value) => {
                    console.log('mutate', actionName, state, value);
                    _.reduce(chain, (t, prop) => t[prop], state)[property].splice(0);
                };
            } else if (key === 'add') {
                mutations[actionName] = (state, value) => {
                    console.log('mutate', actionName, state, value);
                    _.reduce(chain, (t, prop) => t[prop], state)[property].push(value);
                };
            } else if (key === 'remove') {
                mutations[actionName] = (state, value) => {
                    console.log('mutate', actionName, state, value);
                    let array = _.reduce(chain, (t, prop) => t[prop], state)[property];

                    // https://vuejs.org/v2/guide/list.html#Caveats
                    let index = array.indexOf(value);
                    if (index !== -1) {
                        array.splice(index, 1);
                    } else {
                        console.log(`item ${value} not found`);
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

export default function (template, module) {
    // mapping action to module id
    _.forOwn(module, (value, key) => {
        delete module[key];
        module[`[${this.$moduleId}]:${key}`] = value;
    });

    this.$store.registerModule(this.$moduleId, {
        state: this,
        actions: {
            ...this::visitActions(template),
            ...module
        },
        mutations: {
            ...this::visitMutations(template)
        }
    });

    return module;
}