import { $t } from '../helpers/index.js';

export default function updatePrimaryPalette(palette) {
    return $t().primaryPalette(palette).update().preset;
}
