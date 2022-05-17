import Joi from 'joi';

const ordersSchema = Joi.object({
  productIds: Joi
    .array()
    .items(Joi.number())
    .required()
    .messages({
      'any.required': '"productsIds" is required',
      'array.base': '"productsIds" must be an array',
      'number.base': '"productsIds" must include only numbers',
    }),
});

export default ordersSchema;