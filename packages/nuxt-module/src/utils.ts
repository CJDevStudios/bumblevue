import { createStyleAsString } from '@cjdevstudios/bumbleuix-utils/dom';
import { isFunction } from '@cjdevstudios/bumbleuix-utils/object';
import type { MetaType } from '@cjdevstudios/bumblevue-metadata';
import type { ConstructsType, ResolvePathOptions } from './types';

export const Utils = {
    object: {
        getName(item: MetaType, options: ConstructsType) {
            return isFunction(options?.name) ? options.name(item) : `${options.prefix}${item.name}`;
        },
        getPath(fn: any, options: ResolvePathOptions) {
            return isFunction(fn) ? fn(options) : options.from;
        },
        createStyleAsString(css: string, options = { name: '' }) {
            const { name, ...rest } = options;

            return createStyleAsString(css, { 'data-bumblevue-style-id': name, ...rest });
        }
    }
};
