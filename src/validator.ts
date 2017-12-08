import * as joi from 'joi';
import * as koa from 'koa';

export interface ISchemaCollection {
  [index: string]: joi.AnySchema;
}

export function validate(schema: ISchemaCollection, options?: joi.ValidationOptions): koa.Middleware {
  return async (ctx, next) => {
    Object.keys(schema).forEach((key) => {
      const { error } = schema[key].validate(
        ctx.request[key] || ctx[key],
        options || {}
      );

      if (error) {
        throw error;
      }
    });
    return next();
  };
}
