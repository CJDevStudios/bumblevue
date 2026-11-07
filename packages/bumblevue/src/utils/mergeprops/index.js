import { cn } from '../classnames/index.js';
import { isFunction } from '../object/index.js';

function _mergeProps({ skipUndefined = false }, ...props) {
    return props?.reduce((merged, ps = {}) => {
        for (const key in ps) {
            const value = ps[key];

            if (skipUndefined && value === undefined) continue;

            if (key === 'style') {
                merged['style'] = { ...merged['style'], ...ps['style'] };
            } else if (key === 'class' || key === 'className') {
                merged[key] = cn(merged[key], ps[key]);
            } else if (isFunction(value)) {
                const fn = merged[key];

                merged[key] = fn
                    ? (...args) => {
                          fn(...args);
                          value(...args);
                      }
                    : value;
            } else {
                merged[key] = value;
            }
        }

        return merged;
    }, {});
}

export function mergeProps(...props) {
    return _mergeProps({ skipUndefined: false }, ...props);
}

export function mergeDefaultProps(...props) {
    return _mergeProps({ skipUndefined: true }, ...props);
}
