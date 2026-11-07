import isObject from './isObject.js';

function _deepMerge(target = {}, source = {}) {
    const mergedObj = { ...target };

    Object.keys(source).forEach((key) => {
        const typedKey = key;

        if (isObject(source[typedKey]) && typedKey in target && isObject(target[typedKey])) {
            mergedObj[typedKey] = _deepMerge(target[typedKey], source[typedKey]);
        } else {
            mergedObj[typedKey] = source[typedKey];
        }
    });

    return mergedObj;
}

/**
 * Merges multiple objects into one.
 * @param args - Objects to merge.
 * @returns Merged object.
 */
export default function deepMerge(...args) {
    return args.reduce((acc, obj, i) => (i === 0 ? obj : _deepMerge(acc, obj)), {});
}
