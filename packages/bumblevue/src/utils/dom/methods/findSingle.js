import isElement from './isElement.js';

export default function findSingle(element, selector) {
    return isElement(element) ? (element.matches(selector) ? element : element.querySelector(selector)) : null;
}
