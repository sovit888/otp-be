import { ValidationSchema } from "@/interfaces/validation.interface";
import Joi from "joi";

export const otpValidation: ValidationSchema = {
  body: Joi.object().keys({
    code: Joi.string().required().length(6).pattern(/[^7]$/).messages({
      "string.length": `Code should be min {#limit} characters`,
      "string.pattern.base": "Code should not end with 7 at the end",
    }),
  }),
};
