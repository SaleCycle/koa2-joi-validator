"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validate(schema, options) {
    return async (ctx, next) => {
        Object.keys(schema).forEach((key) => {
            const { error } = schema[key].validate(ctx.request[key] || ctx[key], options || {});
            if (error) {
                throw error;
            }
        });
        return next();
    };
}
exports.validate = validate;
