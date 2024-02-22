import joi from 'joi'

export const prodcutValidation = joi.object({
    name: joi.string().min(3).max(30).required(),
    price: joi.number().min(1).required(),
    description: joi.string().min(3).max(256).required(),
    stock: joi.number().min(1).required()
})