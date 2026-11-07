import { deepMerge } from '@cjdevstudios/bumbleuix-utils/object';
import Theme from '../config/index.js';

export default function updatePreset(...presets) {
    const newPreset = deepMerge(Theme.getPreset(), ...presets);

    Theme.setPreset(newPreset);

    return newPreset;
}
