import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi
    .required()
    .messages({
      'any.required': '"username" is required',
    }),
  password: Joi
    .required()
    .messages({
      'any.required': '"password" is required',
    }),
});

export default loginSchema;