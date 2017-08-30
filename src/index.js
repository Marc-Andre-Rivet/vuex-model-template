import __TYPE from 'enumerations/type';

import __ModelObject from 'ModelObject';
import ProxyWrapper from 'ProxyWrapper';
import VuexModelObject from 'VuexModelObject';

export default VuexModelObject;
export const ModelObject = __ModelObject;
export const TYPE = __TYPE;

export function setCustomProperties(properties) {
    ProxyWrapper.setCustomProperties(properties);
}