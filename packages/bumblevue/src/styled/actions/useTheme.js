import { $t } from '../helpers/index.js';

export default function useTheme(theme) {
    return $t(theme).update({ mergePresets: false });
}
