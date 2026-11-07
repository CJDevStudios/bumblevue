import getParentNode from './getParentNode.js';

export default function isExist(element) {
    return !!(element !== null && typeof element !== 'undefined' && element.nodeName && getParentNode(element));
}
