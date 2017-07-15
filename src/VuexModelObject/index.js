import AbstractModelObject from 'AbstractModelObject';
import wrapInstance from 'AbstractModelObject/wrapInstance';

import generateActions from 'VuexModelObject/generateActions';
import generateModule from 'VuexModelObject/generateModule';
import generateObjectId from 'VuexModelObject/generateObjectId';

let _store;
let wm = new WeakMap();

export class VuexModelObject extends AbstractModelObject {
    constructor(
        data,
        template,
        customActions = {}
    ) {
        if (!_store) {
            throw new Error('Run ModelObject.use($store) before calling ctor');
        }

        super(data, template, target => {
            target::generateActions(template, customActions);
        });

        wm.set(this, {
            $objectId: this::generateObjectId(),
            $store: _store,
            $template: template
        });

        return this::wrapInstance(target => {
            target::generateModule(template, customActions);
        });
    }

    get $moduleId() {
        return this.constructor.name;
    }

    get $store() {
        return wm.get(this).$store;
    }

    get $template() {
        return wm.get(this).$template;
    }

    static use(store) {
        if (!_store) {
            _store = store;
        } else {
            throw new Error('store already set');
        }
    }
}