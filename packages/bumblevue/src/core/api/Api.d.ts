// Filter
export interface FilterMatchModeOptions {
    readonly STARTS_WITH: string;
    readonly CONTAINS: string;
    readonly NOT_CONTAINS: string;
    readonly ENDS_WITH: string;
    readonly EQUALS: string;
    readonly NOT_EQUALS: string;
    readonly IN: string;
    readonly LESS_THAN: string;
    readonly LESS_THAN_OR_EQUAL_TO: string;
    readonly GREATER_THAN: string;
    readonly GREATER_THAN_OR_EQUAL_TO: string;
    readonly BETWEEN: string;
    readonly DATE_IS: string;
    readonly DATE_IS_NOT: string;
    readonly DATE_BEFORE: string;
    readonly DATE_AFTER: string;
}

export declare const FilterMatchMode: FilterMatchModeOptions;

export interface FilterOperatorOptions {
    readonly AND: string;
    readonly OR: string;
}

export declare const FilterOperator: FilterOperatorOptions;

export declare namespace FilterService {
    export function filter(value: any, fields: string[], filterValue: any, filterMatchMode: string, filterLocale?: string): any[];
    export interface filters {
        startsWith(value: any, filter: string, filterLocale?: string): boolean;
        contains(value: any, filter: string, filterLocale?: string): boolean;
        notContains(value: any, filter: string, filterLocale?: string): boolean;
        endsWith(value: any, filter: string, filterLocale?: string): boolean;
        equals(value: any, filter: string, filterLocale?: string): boolean;
        notEquals(value: any, filter: string, filterLocale?: string): boolean;
        in(value: any, filter: string): boolean;
        between(value: any, filter: string): boolean;
        lt(value: any, filter: string): boolean;
        lte(value: any, filter: string): boolean;
        gt(value: any, filter: string): boolean;
        gte(value: any, filter: string): boolean;
        dateIs(value: any, filter: string): boolean;
        dateIsNot(value: any, filter: string): boolean;
        dateBefore(value: any, filter: string): boolean;
        dateAfter(value: any, filter: string): boolean;
    }
    export function register(rule: string, fn: (...arg: any[]) => boolean): void;
}

// Severity
export interface ToastSeverityOptions {
    readonly SUCCESS: string;
    readonly INFO: string;
    readonly WARN: string;
    readonly ERROR: string;
}

export declare const ToastSeverity: ToastSeverityOptions;
