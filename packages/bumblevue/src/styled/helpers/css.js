import { resolve } from '@cjdevstudios/bumblevue/utils/object';
import { evaluateDtExpressions } from '../index.js';
import { dt } from './dt.js';

export function css(strings, ...exprs) {
    if (strings instanceof Array) {
        const raw = strings.reduce((acc, str, i) => acc + str + (resolve(exprs[i], { dt }) ?? ''), '');

        return evaluateDtExpressions(raw, dt);
    }

    return resolve(strings, { dt });
}
