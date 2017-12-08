/// <reference types="koa" />
import * as joi from 'joi';
import * as koa from 'koa';
export interface ISchemaCollection {
    [index: string]: joi.AnySchema;
}
export declare function validate(schema: ISchemaCollection, options?: joi.ValidationOptions): koa.Middleware;
