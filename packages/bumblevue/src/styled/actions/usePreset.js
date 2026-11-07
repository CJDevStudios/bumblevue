import { deepMerge } from '@cjdevstudios/bumbleuix-utils/object';
import Theme from '../config/index.js';

export default function usePreset(...presets) {
    const newPreset = deepMerge(...presets);

    Theme.setPreset(newPreset);

    return newPreset;
}
