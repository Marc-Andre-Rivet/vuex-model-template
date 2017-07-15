import AbstractModelObject from 'AbstractModelObject';
import wrapInstance from 'AbstractModelObject/wrapInstance';

export default class ModelObject extends AbstractModelObject {
    constructor(data, template) {
        super(data, template);

        return this::wrapInstance();
    }
}