import isString from './isString.js';

export default function toCapitalCase(str) {
    return isString(str, false) ? str[0].toUpperCase() + str.slice(1) : str;
}
