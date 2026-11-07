import { $t } from '../helpers/index.js';

export default function updateSurfacePalette(palette) {
    return $t().surfacePalette(palette).update().preset;
}
