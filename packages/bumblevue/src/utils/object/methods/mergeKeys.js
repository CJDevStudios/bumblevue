import deepMerge from './deepMerge.js';

/**
 * @deprecated Use `deepMerge` instead.
 *
 * Merges multiple objects into one.
 * @param args - Objects to merge.
 * @returns Merged object.
 */
export default function mergeKeys(...args) {
    return deepMerge(...args);
}
