import selectNodes from './_selectnodes';
import $ from '../_mq';

const htmlReg = /</;
const customSelectorReg = /:bound\(([^(]*)\)/;

// the function works just like DOM library accepting any kind of arg
// (HTML string, Node, NodeList etc) bu allows to pass custom selector
// eg :bound(KEY)
export default function getNodes(object, selector) {
    let nodes;

    if (
        typeof selector === 'string'
        && !htmlReg.test(selector)
        && customSelectorReg.test(selector)
    ) {
        nodes = selectNodes(object, selector);
    } else {
        nodes = $(selector);
    }

    return nodes;
}
