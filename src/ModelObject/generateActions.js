import _ from 'lodash';
import { act } from 'vuex/mixin';
import getActions from 'ModelObject/getActions';

let prefixes = [];
function visitUserActions(template) {
    let actions = {};

    let properties = Object.getOwnPropertyNames(template);
    _.each(properties, property => {
        actions[property] = {};

        _.forOwn(getActions(template[property].type), key => {
            let actionName = `[${this.$moduleId}]/${prefixes.join('/')}${prefixes.length ? '/' : ''}${property}:${key}`;

            actions[property][key] = actionName; //(...args) => {
            //     /*#if log*/
            //     console.log('do', actionName, ...args);
            //     /*#endif*/
            //     return Promise.resolve(this::act(actionName, ...args));
            // };
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

        actions[key] = actionName; //(...args) => {
        //     /*#if log*/
        //     console.log('do', actionName, ...args);
        //     /*#endif*/
        //     return Promise.resolve(this::act(actionName, ...args));
        // };
    });

    return actions;
}

export default function (template, customActions) {
    let rawActions = {
        ...this::visitUserActions(template),
        ...this::visitCustomActions(customActions)
    };

    let actionFunctions = {};
    _.forOwn(rawActions, (actions, key) => {
        if (_.isObject(actions)) {
            actionFunctions[key] = {};

            _.forOwn(actions, (action, actionName) => {
                actionFunctions[key][actionName] = (...args) => {
                    /*#if log*/
                    console.log('do', action, ...args);
                    /*#endif*/
                    return Promise.resolve(this::act(action, ...args));
                };
            });
        } else if (_.isString(actions)) {
            actionFunctions[key] = (...args) => {
                /*#if log*/
                console.log('do', actions, ...args);
                /*#endif*/
                return Promise.resolve(this::act(actions, ...args));
            };
        }
    });

    this.actions = actionFunctions;
}
