import TYPE from 'enumerations/type';

export default template => {
    if (template.readonly) {
        return [];
    } else if (template.type === TYPE.Array) {
        return ['set', 'add', 'remove', 'clear'];
    } else {
        return ['set'];
    }
};