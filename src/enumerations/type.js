import Wrapper from 'ProxyWrapper';

export default Wrapper.getProxy({
    Any: Symbol('Any'),
    Array: Symbol('Array'),
    Boolean: Symbol('Boolean'),
    Number: Symbol('Number'),
    Object: Symbol('Object'),
    String: Symbol('String')
});