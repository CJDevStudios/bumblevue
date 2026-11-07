export default function isElement(element) {
    return typeof Element !== 'undefined' ? element instanceof Element : element !== null && typeof element === 'object' && element.nodeType === 1 && typeof element.nodeName === 'string';
}
