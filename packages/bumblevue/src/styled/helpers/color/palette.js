import { matchRegex } from '@cjdevstudios/bumblevue/utils/object';
import { EXPR_REGEX } from '../../utils/index.js';
import shade from './shade.js';
import tint from './tint.js';

const scales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export default (color) => {
    if (matchRegex(color, EXPR_REGEX)) {
        const token = color.replace(/{|}/g, '');

        return scales.reduce((acc, scale) => {
            acc[scale] = `{${token}.${scale}}`;

            return acc;
        }, {});
    }

    return typeof color === 'string'
        ? scales.reduce((acc, scale, i) => {
              acc[scale] = i <= 5 ? tint(color, (5 - i) * 19) : shade(color, (i - 5) * 15);

              return acc;
          }, {})
        : color;
};
