export default function assign(target, source) {
    const keys = Object.keys(source);
    let i = keys.length;
    let key;

    while (--i >= 0) {
        key = keys[i];
        target[key] = source[key];
    }

    return target;
}
