import isElement from './isElement.js';

export default function find(element, selector) {
    return isElement(element) ? Array.from(element.querySelectorAll(selector)) : [];
}
