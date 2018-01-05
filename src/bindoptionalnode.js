import bindNode from './bindnode';

// TODO: Adds a binding, not throwing an error when a node is missing
export default function bindOptionalNode() {
    // this hack allows to keep bindOptionalNode as compact as possible
    // and doesn't require to flip args and support all bindNode variations
    bindNode.temporaryOptionalFlag = true;
    return bindNode.apply(this, arguments);
}
