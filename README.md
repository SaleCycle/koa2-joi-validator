# koa2-joi-validator
joi validation middleware for koa2

Owned by the the [assets team](https://salecycle.slack.com/messages/G870U5JBV)

[Koa](koajs.com) middlevare for request validation using [Joi](https://github.com/hapijs/joi).

Contains full typescript definitions

## Installation

```
npm install --save @salecycle/koa2-joi-validator
```

## Usage
```javascript
const validate = require('@salecycle/koa2-joi-validator');

const schema = {
  headers: joi.object().keys({
    'my-custom-header': joi.string().required(),
  }),
  body: joi.object().keys({
    email: joi
      .string()
      .email()
      .required(),
    password: joi
      .string()
      .required(),
  }),
};

route.post('/login', validate(schema), async ctx => {...})
```
