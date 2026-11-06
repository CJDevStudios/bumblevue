import type { Struct } from 'superstruct';
import type { ResolverOptions, ResolverResult } from '..';

export declare const superStructResolver: <T>(schema: Struct<T>, schemaOptions?: any, resolverOptions?: ResolverOptions) => ({ values, name }: any) => Promise<ResolverResult<T>>;
