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
            throw new Error('default values need to be resolved asynchronously. Use \'hydrate\' before using the consrtructor');
        }

        strategy(this);
    }

    toJSON() {
        return this::persist({}, this.$template);
    }

    static hydrate(raw, template, Ctor) {
        /*#if log*/
        console.log('hydrate > raw', raw, template);
        /*#endif*/

        let hydratePromise = deserialize(raw, template).then(deserialized => {
            /*#if log*/
            console.log('hydrate > deserialized', deserialized, template);
            /*#endif*/

            let dest = {};
            return Promise.resolve(dest::applyData(deserialized, template)).then(() => dest);
        });

        /*#if log*/
        hydratePromise = hydratePromise.then(hydrated => {
            console.log('hydrate > hydrated', hydrated, template);

            return hydrated;
        });
        /*#endif*/

        if (Ctor) {
            hydratePromise = hydratePromise.then(hydrated => {
                return new Ctor(hydrated);
            });
        }

        return hydratePromise;
    }
}