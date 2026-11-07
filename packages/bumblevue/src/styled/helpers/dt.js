import { isEmpty, matchRegex } from '@cjdevstudios/bumblevue/utils/object';
import Theme from '../config/index.js';
import { EXPR_REGEX, getVariableValue } from '../utils/index.js';

export const $dt = (tokenPath) => {
    const theme = Theme.getTheme();

    const variable = dtwt(theme, tokenPath, undefined, 'variable');
    const name = variable?.match(/--[\w-]+/g)?.[0];
    const value = dtwt(theme, tokenPath, undefined, 'value');

    return {
        name,
        variable,
        value
    };
};

export const dt = (...args) => {
    return dtwt(Theme.getTheme(), ...args);
};

export const dtwt = (theme = {}, tokenPath, fallback, type) => {
    if (tokenPath) {
        const { variable: VARIABLE, options: OPTIONS } = Theme.defaults || {};
        const { prefix, transform } = theme?.options || OPTIONS || {};
        const token = matchRegex(tokenPath, EXPR_REGEX) ? tokenPath : `{${tokenPath}}`;
        const isStrictTransform = type === 'value' || (isEmpty(type) && transform === 'strict'); // @todo - TRANSFORM: strict | lenient(default)

        return isStrictTransform ? Theme.getTokenValue(tokenPath) : getVariableValue(token, undefined, prefix, [VARIABLE.excludedKeyRegex], fallback);
    }

    return '';
};
