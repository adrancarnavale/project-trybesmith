import Joi from 'joi';

const productsSchema = Joi.object({
  name: Joi
    .string()
    .min(3)
    .required()
    .messages({
      'string.base': '"name" must be a string',
      'string.min': '"name" length must be at least 3 characters long',
      'any.required': '"name" is required',
    }),
  amount: Joi
    .string()
    .min(3)
    .required()
    .messages({
      'string.base': '"amount" must be a string',
      'string.min': '"amount" length must be at least 3 characters long',
      'any.required': '"amount" is required',
    }),
});

export default productsSchema;