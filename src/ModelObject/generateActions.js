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

            actions[property][key] = actionName;
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

        actions[key] = actionName;
    });

    return actions;
}

function buildActions(rawActions, target) {
    _.forOwn(rawActions, (actions, key) => {
        if (_.isObject(actions)) {
            target[key] = {};
            this::buildActions(actions, target[key]);
        } else if (_.isString(actions)) {
            target[key] = (...args) => {
                /*#if log*/
                console.log('do', actions, this, ...args);
                /*#endif*/
                return Promise.resolve(this::act(actions, this, ...args));
            };
        }
    });
}

export default function (template, customActions) {
    let rawActions = {
        ...this::visitUserActions(template),
        ...this::visitCustomActions(customActions)
    };

    this.actions = {};
    this::buildActions(rawActions, this.actions);
}
