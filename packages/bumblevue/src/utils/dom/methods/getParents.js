import getParentNode from './getParentNode.js';

export default function getParents(element, parents = []) {
    const parent = getParentNode(element);

    return parent === null ? parents : getParents(parent, parents.concat([parent]));
}
