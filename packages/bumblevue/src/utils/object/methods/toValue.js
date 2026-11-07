import resolve from './resolve.js';

export default function toValue(value) {
    if (value && typeof value === 'object') {
        if (Object.hasOwn(value, 'current')) {
            // For React
            return value.current;
        } else if (Object.hasOwn(value, 'value')) {
            // For Vue
            return value.value;
        }
    }

    // For Angular signals and functions usage
    return resolve(value);
}
