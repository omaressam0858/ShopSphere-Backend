import joi from 'joi'

export const registerValidation = joi.object({
    firstName: joi.string().min(3).max(30).required(),
    lastName: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    phone: joi.string().min(9).max(14).required(),
    password: joi.string().min(8).max(30).required(),
    city: joi.string().min(3).max(30).required(),
    building: joi.string().min(1).max(30).required(),
    floor: joi.string().min(1).max(10).required()
})