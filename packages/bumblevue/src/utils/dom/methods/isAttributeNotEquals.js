import isAttributeEquals from './isAttributeEquals.js';

export default function isAttributeNotEquals(element, name, value) {
    return !isAttributeEquals(element, name, value);
}
