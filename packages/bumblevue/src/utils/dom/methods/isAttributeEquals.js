import getAttribute from './getAttribute.js';
import isElement from './isElement.js';

export default function isAttributeEquals(element, name, value) {
    return isElement(element) ? getAttribute(element, name) === value : false;
}
