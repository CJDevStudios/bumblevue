const lastIds = {};

export function uuid(prefix = 'pui_id_') {
    if (!Object.hasOwn(lastIds, prefix)) {
        lastIds[prefix] = 0;
    }

    lastIds[prefix]++;

    return `${prefix}${lastIds[prefix]}`;
}
