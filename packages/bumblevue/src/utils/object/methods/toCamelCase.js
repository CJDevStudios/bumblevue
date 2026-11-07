import isString from './isString.js';

export default function toCamelCase(str) {
    // convert snake, kebab and pascal cases to camel case
    return isString(str) ? str.replace(/[-_](\w)/g, (_, c) => (c ? c.toUpperCase() : '')) : str;
}
