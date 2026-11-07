const lastIds = {};

/**
 * @deprecated Use the Vue-native `useId()` composable instead. The `uuid()` function will be removed in a future release.
 */
export function uuid(prefix = 'pui_id_') {
    if (!Object.hasOwn(lastIds, prefix)) {
        lastIds[prefix] = 0;
    }

    lastIds[prefix]++;

    return `${prefix}${lastIds[prefix]}`;
}
