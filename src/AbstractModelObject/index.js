import applyData from 'ModelObject/applyData';
import deserialize from 'ModelObject/deserialize';
import persist from 'ModelObject/persist';

let wm = new WeakMap();

export default class AbstractModelObject {
    constructor(raw, options) {
        if (!options || !options.template) {
            throw new Error('options.template needs to be defined');
        }

        let template = options.template;

        /*#if log*/
        console.log('ctor > deserialize raw data', this, raw);
        /*#endif*/

        let waitReady = deserialize(raw, template).then(deserialized => {
            /*#if log*/
            console.log('ctor > deserialize raw data (completed)', deserialized, this);
            console.log('ctor > apply data to instance', this);
            /*#endif*/

            let applyPromises = this::applyData(deserialized, template);

            /*#if log*/
            if (applyPromises) {
                console.log(`ctor > apply data to instance (in progress, waiting for ${applyPromises.length} asynchronous calls)`, this);
            }
            /*#endif*/

            return Promise.resolve(applyPromises);
        }).then(() => {
            /*#if log*/
            console.log('ctor > apply data to instance (completed)', this);
            console.log('ctor > apply $onCreate', this);
            /*#endif*/

            return this.$onCreate();
        });

        /*#if log*/
        waitReady = waitReady.then(() => {
            console.log('ctor > apply strategy (completed)', this);
            console.log('ctor > instance ready', this);

            wm.get(this).$isReady = true;

            return this;
        });
        /*#endif*/


        wm.set(this, {
            isReady: false,
            options: options,
            waitReady: waitReady
        });
    }

    $onCreate() {
        /*#if log*/
        console.log('AbstractModelObject.$onCreate', this);
        /*#endif*/

        return Promise.resolve();
    }

    toJSON(includeTransient = false) {
        return this::persist({}, this.$template, includeTransient);
    }

    get $isReady() {
        return wm.get(this).isReady;
    }

    get $options() {
        return wm.get(this).options;
    }

    get $waitReady() {
        return wm.get(this).waitReady;
    }
}