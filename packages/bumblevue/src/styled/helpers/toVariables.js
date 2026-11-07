import { isObject, matchRegex, toKebabCase } from '@cjdevstudios/bumblevue/utils/object';
import Theme from '../config/index.js';
import { getRule, getVariableName, getVariableValue, setProperty, toNormalizeVariable, toValue } from '../utils/index.js';

export default function (theme, options = {}) {
    const VARIABLE = Theme.defaults.variable;
    const { prefix = VARIABLE.prefix, selector = VARIABLE.selector, excludedKeyRegex = VARIABLE.excludedKeyRegex } = options;

    const tokens = [];
    const variables = [];

    const stack = [{ node: theme, path: prefix }];

    while (stack.length) {
        const { node, path } = stack.pop();

        for (const key in node) {
            const raw = node[key];
            const val = toValue(raw);

            const skipNormalize = matchRegex(key, excludedKeyRegex);
            const variablePath = skipNormalize ? toNormalizeVariable(path) : toNormalizeVariable(path, toKebabCase(key));

            if (isObject(val)) {
                stack.push({ node: val, path: variablePath });
            } else {
                const varName = getVariableName(variablePath);
                const varValue = getVariableValue(val, variablePath, prefix, [excludedKeyRegex]);

                setProperty(variables, varName, varValue);

                let token = variablePath;

                if (prefix && token.startsWith(prefix + '-')) {
                    token = token.slice(prefix.length + 1);
                }

                tokens.push(token.replace(/-/g, '.'));
            }
        }
    }

    const declarations = variables.join('');

    return {
        value: variables,
        tokens,
        declarations,
        css: getRule(selector, declarations)
    };
}
