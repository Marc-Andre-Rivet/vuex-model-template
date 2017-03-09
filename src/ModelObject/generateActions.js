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

export default function (template, customActions) {
    this.actions = {
        ...this::visitUserActions(template),
        ...this::visitCustomActions(customActions)
    };
}
