import _ from 'lodash';
import { act } from 'vuex/mixin';
import getActions from 'VuexModelObject/getActions';

class Action {
    constructor(name, customFn) {
        this.name = name;
        this.customFn = customFn;
    }
}

let prefixes = [];
function visitUserActions(template) {
    let actions = {};

    let properties = Object.getOwnPropertyNames(template);
    _.each(properties, property => {
        actions[property] = {};

        _.forOwn(getActions(template[property]), key => {
            let actionName = `[${this.$moduleId}]/${prefixes.join('/')}${prefixes.length ? '/' : ''}${property}:${key}`;

            actions[property][key] = new Action(actionName);
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

        actions[key] = new Action(actionName, value);
    });

    return actions;
}

function buildActions(rawActions, target) {
    _.forOwn(rawActions, (actions, key) => {
        if (actions instanceof Action) {
            target[key] = (...args) => {
                if (actions.customFn) {
                    /*#if log*/
                    console.log('do > custom action', actions.name, this, ...args);
                    /*#endif*/
                    return Promise.resolve(actions.customFn.apply(this, args));
                } else {
                    /*#if log*/
                    console.log('do > action', actions.name, this, ...args);
                    /*#endif*/
                    return Promise.resolve(this::act(actions.name, this, ...args));
                }
            };
        }
        else if (_.isObject(actions)) {
            target[key] = {};
            this::buildActions(actions, target[key]);
        }
    });
}

export default function () {
    let rawActions = {
        ...this::visitUserActions(this.$template),
        ...this::visitCustomActions(this.$actions)
    };

    this.actions = {};
    this::buildActions(rawActions, this.actions);

    this.properties = {};
    if (this.$properties) {
        _.forOwn(this.$properties, (property, key) => {
            this.properties[key] = property.bind(this);
        });
    }
}
