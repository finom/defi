export default function slice(arrLike, start, end) {
    const l = arrLike.length;
    let i = start || 0;
    const _end = end || l;
    const arr = Array(_end - i);
    let j = 0;

    while (i < _end) {
        arr[j++] = arrLike[i++];
    }

    return arr;
}
