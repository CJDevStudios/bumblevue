import createStyleMarkup from './createStyleMarkup.js';

/**
 * @deprecated Use `createStyleMarkup` instead.
 */
export default function createStyleAsString(css, options = {}) {
    return createStyleMarkup(css, options);
}
