let ids = {};

export default function () {
    let key = this.constructor.name;
    ids[key] = ids[key] || 0;

    return `${key}/${ids[key]++}`;
}