export default function map(arr, callback) {
    let i = 0;
    const l = arr.length;
    const result = [];

    for (; i < l; i++) {
        result.push(callback(arr[i], i));
    }
    return result;
}
