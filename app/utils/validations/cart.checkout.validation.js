import joi from 'joi'

const cartItem = joi.object({
    id: joi.number().integer().unsafe().required(),
    qt: joi.number().integer().min(1).required()
})

export const Cart = joi.array().items(cartItem).required()