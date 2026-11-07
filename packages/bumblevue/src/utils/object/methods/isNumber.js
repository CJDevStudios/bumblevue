import isNotEmpty from './isNotEmpty.js';

export default function isNumber(value) {
    return isNotEmpty(value) && !isNaN(value);
}
