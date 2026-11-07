import isObject from './isObject.js';

export default function omit(obj, ...keys) {
    if (!isObject(obj)) return obj;

    const copy = { ...obj };

    keys?.flat().forEach((key) => delete copy[key]);

    return copy;
}
