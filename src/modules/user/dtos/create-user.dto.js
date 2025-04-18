import Joi from 'joi';

export default Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phoneNumber: Joi.string().required(),
  region: Joi.string().required(),
  location: Joi.object({
    coordinates: Joi.array().items(Joi.number()).length(2).required(),
    address: Joi.string().optional()
  }).required(),
  role: Joi.string().valid('customer', 'provider', 'admin').optional()
});
