/**
 *
 * Resolver module, provides the component metadata and the resolver for unplugin-vue-components.
 *
 * @module resolver
 *
 */
import type { ComponentResolveResult, ComponentResolver } from 'unplugin-vue-components/types';

export interface MetaType {
    name?: string;
    as?: string;
    from?: string;
    use?: {
        as?: string;
    };
}

export declare function toMeta(arr?: any[]): MetaType[] | undefined;

export declare const form: MetaType[];
export declare const button: MetaType[];
export declare const data: MetaType[];
export declare const panel: MetaType[];
export declare const overlay: MetaType[];
export declare const file: MetaType[];
export declare const menu: MetaType[];
export declare const chart: MetaType[];
export declare const messages: MetaType[];
export declare const media: MetaType[];
export declare const misc: MetaType[];
export declare const extensions: MetaType[];
export declare const components: MetaType[];
export declare const directives: MetaType[];
export declare const composables: MetaType[];

export interface BumbleVueResolverOptions {
    components?: {
        prefix?: string;
    };
    directives?: {
        prefix?: string;
    };
    resolve?: (meta: MetaType, type: string) => ComponentResolveResult;
}

export declare function BumbleVueResolver(options?: BumbleVueResolverOptions): ComponentResolver[];
