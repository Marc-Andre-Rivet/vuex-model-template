import _ from 'lodash';

let prefixes = [];
function visitActions(template) {
    let actions = {};

    let properties = Object.getOwnPropertyNames(template);
    _.each(properties, property => {
        _.forOwn(template[property].actions, (value, key) => {
            let actionName = `[${this.moduleId}]/${prefixes.join('/')}${prefixes.length ? '/' : ''}${property}:${key}`;
            if (key === 'set') {
                actions[actionName] = ({ commit }, value) => {
                    console.log('act', actionName, value);
                    commit(actionName, value);
                    _.each(template[property].sideEffects, sideEffect => {
                        let sideEffectName = `[${this.moduleId}]/${sideEffect.property}:${sideEffect.action}`;
                        commit(sideEffectName, sideEffect.value);
                    });
                };
            }
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
        _.forOwn(template[property].actions, (value, key) => {
            let actionName = `[${this.moduleId}]/${prefixes.join('/')}${prefixes.length ? '/' : ''}${property}:${key}`;
            if (key === 'set') {
                let chain = _.cloneDeep(prefixes);
                mutations[actionName] = (state, value) => {
                    console.log('mutate', actionName, state, value);
                    _.reduce(chain, (t, prop) => t[prop], state)[property] = value;
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

export default function(store, template) {
    store.registerModule(name, {
        state: this,
        actions: this::visitActions(template),
        mutations: this::visitMutations(template)
    });

    return module;
}