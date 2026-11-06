import type { ResolverOptions, ResolverResult } from '..';

export declare const joiResolver: <T>(schema: any, schemaOptions?: any, resolverOptions?: ResolverOptions) => ({ values, name }: any) => Promise<ResolverResult<T>>;
