import joi from 'joi'

export const loginValidation = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).max(30).required()
})