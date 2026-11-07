import isFunction from './isFunction.js';

export default function resolve(obj, ...params) {
    return isFunction(obj) ? obj(...params) : obj;
}
