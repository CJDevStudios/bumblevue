import { deepMerge } from '@cjdevstudios/bumbleuix-utils/object';

export default function definePreset(...presets) {
    return deepMerge(...presets);
}
