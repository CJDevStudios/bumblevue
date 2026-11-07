import isString from './isString.js';

export default function toKebabCase(str) {
    // convert snake, camel and pascal cases to kebab case
    return isString(str)
        ? str
              .replace(/(_)/g, '-')
              .replace(/([a-z])([A-Z])/g, '$1-$2')
              .toLowerCase()
        : str;
}
