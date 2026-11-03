import type { ComputedRef, PropType } from 'vue';

export declare const baseComponentProps: {
    pt: { type: PropType<any>; default: undefined };
    ptOptions: { type: PropType<any>; default: undefined };
    unstyled: { type: BooleanConstructor; default: undefined };
    dt: { type: PropType<any>; default: undefined };
};

export interface UseComponentOptions {
    /**
     * Component name, defaults to the component type name.
     */
    name?: string;
    /**
     * Component style.
     */
    style?: any;
    /**
     * Name of the host component when used as a sub component.
     */
    hostName?: string;
    /**
     * Component state exposed to pass through options and child components.
     */
    state?: Record<string, any>;
    /**
     * Methods exposed to pass through options and child components.
     */
    members?: Record<string, any>;
}

export interface UseComponentReturn {
    /**
     * Options API compatible stand-in for the component instance.
     */
    instance: any;
    cx(key?: string, params?: any): any;
    sx(key?: string, when?: boolean, params?: any): any;
    ptm(key?: string, params?: any): any;
    ptmi(key?: string, params?: any): any;
    ptmo(obj?: any, key?: string, params?: any): any;
    $id: ComputedRef<string>;
    $name: ComputedRef<string>;
    $attrSelector: string;
    $style: ComputedRef<any>;
    $params: ComputedRef<any>;
    $inProps: ComputedRef<Record<string, any>>;
    $bumblevueConfig: ComputedRef<any>;
    isUnstyled: ComputedRef<boolean | undefined>;
}

export declare function useComponent(props: Record<string, any>, options?: UseComponentOptions): UseComponentReturn;
