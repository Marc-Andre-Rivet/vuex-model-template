import Wrapper from 'ProxyWrapper';

export default function (strategy = () => { }) {
    let proxy = Wrapper.getProxy(this);
    strategy(proxy);

    return proxy;
}