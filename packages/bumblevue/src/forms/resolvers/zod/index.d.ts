import type { ParseParams, Schema } from 'zod';
import type { ResolverOptions, ResolverResult } from '..';

export declare const zodResolver: <T extends Schema<any, any>>(schema: T, schemaOptions?: ParseParams, resolverOptions?: ResolverOptions) => ({ values, name }: any) => Promise<ResolverResult<T>>;
