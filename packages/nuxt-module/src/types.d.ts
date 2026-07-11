import type { BumbleVueConfiguration } from 'bumblevue/config';

export interface ConstructsType {
    prefix?: string | undefined;
    name?: (item: any) => string | undefined;
    include?: '*' | Array<string | { name: string; use?: { as: string } }> | ((list: any) => string[] | undefined) | undefined;
    exclude?: '*' | Array<string | { name: string; use?: { as: string } }> | ((list: any) => string[] | undefined) | undefined;
}

export interface ModuleOptions {
    useBumbleVue?: boolean;
    autoImport?: boolean;
    resolvePath?: any;
    /*cssLayerOrder?: string;*/
    importPT?: ImportOptions;
    importTheme?: ImportOptions;
    loadStyles?: boolean;
    options?: BumbleVueOptions;
    components?: ConstructsType;
    directives?: ConstructsType;
    composables?: Omit<ConstructsType, 'prefix'>;
}

export interface BumbleVueOptions extends BumbleVueConfiguration {}

export interface ImportOptions {
    as?: string;
    from: string;
}

export interface ResolvePathOptions {
    name?: string;
    as?: string;
    from: string;
    type?: 'config' | 'component' | 'directive' | 'composable' | 'service' | 'style' | undefined;
}

declare module '@nuxt/schema' {
    interface NuxtConfig {
        bumblevue?: ModuleOptions;
    }
    interface NuxtOptions {
        bumblevue?: ModuleOptions;
    }
}
