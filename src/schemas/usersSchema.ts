import Joi from 'joi';

const usersSchema = Joi.object({
  username: Joi
    .string()
    .min(3)
    .required()
    .messages({
      'string.base': '"username" must be a string',
      'string.min': '"username" length must be at least 3 characters long',
      'any.required': '"username" is required',
    }),
  classe: Joi
    .string()
    .min(3)
    .required()
    .messages({
      'string.base': '"classe" must be a string',
      'string.min': '"classe" length must be at least 3 characters long',
      'any.required': '"classe" is required',
    }),
  level: Joi
    .number()
    .min(1)
    .required()
    .messages({
      'number.base': '"level" must be a number',
      'number.min': '"level" must be greater than or equal to 1',
      'any.required': '"level" is required',
    }),
  password: Joi
    .string()
    .min(8)
    .required()
    .messages({
      'string.base': '"password" must be a string',
      'string.min': '"password" length must be at least 8 characters long',
      'any.required': '"password" is required',
    }),
});

export default usersSchema;