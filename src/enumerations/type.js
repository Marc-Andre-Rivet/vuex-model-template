import Wrapper from 'ProxyWrapper';

export default Wrapper.getProxy({
    Any: Symbol('Any'),
    Array: Symbol('Array'),
    Boolean: Symbol('Boolean'),
    Complex: Symbol('Complex'),
    Function: Symbol('Function'),
    Number: Symbol('Number'),
    Object: Symbol('Object'),
    String: Symbol('String'),
    Symbol: Symbol('Symbol')
});