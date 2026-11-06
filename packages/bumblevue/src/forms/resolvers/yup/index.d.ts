import type { AnyObjectSchema, ValidateOptions } from 'yup';
import type { ResolverOptions, ResolverResult } from '..';

export declare const yupResolver: <T>(schema: AnyObjectSchema, schemaOptions?: ValidateOptions<any>, resolverOptions?: ResolverOptions) => ({ values, name }: any) => Promise<ResolverResult<T>>;
