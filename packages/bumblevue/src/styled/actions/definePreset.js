import { deepMerge } from '@cjdevstudios/bumblevue/utils/object';

export default function definePreset(...presets) {
    return deepMerge(...presets);
}
