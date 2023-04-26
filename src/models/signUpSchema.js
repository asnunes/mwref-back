import Joi from "joi";

export const signUpSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
    password: Joi.string().required(),
    repeatPassword: Joi.ref("password"),
});
