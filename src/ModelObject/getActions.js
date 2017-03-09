import TYPE from 'enumerations/type';

export default type => {
    if (type === TYPE.Array) {
        return ['set', 'add', 'remove', 'clear'];
    } else {
        return ['set'];
    }
};