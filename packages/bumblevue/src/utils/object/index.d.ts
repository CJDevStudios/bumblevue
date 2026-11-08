export declare function compare<T = unknown>(value1: T, value2: T, comparator: (val1: T, val2: T) => number, order?: number): number;

export declare function contains<T = unknown>(value: T, list: T[]): boolean;

export declare function deepEquals(obj1: unknown, obj2: unknown): boolean;

/**
 * Merges multiple objects into one.
 * @param args - Objects to merge.
 * @returns Merged object.
 */
export declare function deepMerge(...args: Record<string, unknown>[]): Record<string, unknown>;

export declare function equals(obj1: any, obj2: any, field?: string): boolean;

export declare function findIndexInList<T = any>(value: T, list: T[]): number;

export declare function getKeyValue<T extends Record<string, unknown>>(obj: T | undefined, key?: string, params?: unknown): unknown;

export declare function isArray(value: any, empty?: boolean): boolean;

export declare function isDate(value: unknown): value is Date;

export declare function isEmpty(value: any): boolean;

export declare function isFunction(value: unknown): value is (...args: unknown[]) => unknown;

export declare function isNumber(value: unknown): boolean;

export declare function isObject(value: unknown, empty?: boolean): value is object;

export declare function isPrintableCharacter(char?: string): boolean;

export declare function isString(value: unknown, empty?: boolean): value is string;

export declare function localeComparator(): (val1: string, val2: string) => number;

export declare function matchRegex(str: string, regex?: RegExp): boolean;

export declare function minifyCSS(css?: string): string | undefined;

export declare function nestedKeys(obj?: Record<string, any>, parentKey?: string): string[];

export declare function omit(obj: unknown, ...keys: string[]): unknown;

export declare function removeAccents(str: string): string;

export declare function reorderArray<T>(value: T[], from: number, to: number): void;

export declare function resolve<T, P extends unknown[], R>(obj: T | ((...params: P) => R), ...params: P): T | R;

export declare function resolveFieldData(data: any, field: any): any;

export declare function sort<T>(value1: T, value2: T, order: number | undefined, comparator: (val1: T, val2: T) => number, nullSortOrder?: number): number;

export declare function toCapitalCase(str: string): string;

export declare function toFlatCase(str: string): string;

export declare function toKebabCase(str: string): string;
