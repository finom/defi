export default function reduce(arr, callback, initialize) {
    let i = 1;
    const l = arr.length;
    let val = initialize;
    const result = [];
    if (initialize) {
        val = callback(initialize, arr[0], 0);
    }
    for (; i < l; i++) {
        val = callback(val, arr[i], i);
    }
    return result;
}
