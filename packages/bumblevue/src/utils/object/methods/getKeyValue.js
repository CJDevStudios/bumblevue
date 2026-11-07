import isObject from './isObject.js';
import resolve from './resolve.js';
import toFlatCase from './toFlatCase.js';

export default function getKeyValue(obj, key = '', params = {}) {
    const fKeys = toFlatCase(key).split('.');
    const fKey = fKeys.shift();

    if (fKey) {
        if (isObject(obj)) {
            const matchedKey = Object.keys(obj).find((k) => toFlatCase(k) === fKey) || '';

            return getKeyValue(resolve(obj[matchedKey], params), fKeys.join('.'), params);
        }

        return undefined;
    }

    return resolve(obj, params);
}
