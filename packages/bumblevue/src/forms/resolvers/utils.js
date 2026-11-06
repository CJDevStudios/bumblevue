import { isObject } from '@cjdevstudios/bumbleuix-utils';

export const toValues = (value, name) => {
    if (name) {
        return isObject(value) && Object.hasOwn(value, name) ? value : { [name]: value };
    }

    return value;
};
