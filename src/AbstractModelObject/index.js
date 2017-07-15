import applyData from 'ModelObject/applyData';
import deserialize from 'ModelObject/deserialize';
import persist from 'ModelObject/persist';

export default class AbstractModelObject {
    constructor(
        data,
        template,
        strategy = () => { }
    ) {
        if (this::applyData(data, template)) {
            throw new Error('applyData needed to resolve default values asynchronously. Use \'fromRaw\' before using the consrtructor');
        }

        strategy(this);
    }

    toJSON() {
        return this::persist({}, this.$template);
    }

    static fromJSON(data, template) {
        console.warn(`'fromJSON' deprecated, use 'hydrate' instead`);
        return AbstractModelObject.hydrate(data, template);
    }

    static hydrate(data, template) {
        /*#if log*/
        console.log('hydrate', data, template);
        /*#endif*/

        return deserialize(data, template);
    }

    static fromRaw(data, template) {
        return AbstractModelObject.hydrate(data, template).then(raw => {
            let dest = {};
            return Promise.resolve(dest::applyData(raw, template)).then(() => dest);
        });
    }
}