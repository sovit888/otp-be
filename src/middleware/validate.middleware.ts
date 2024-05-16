import Joi, { Schema } from "joi";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import AppError from "@/utils/appError";

const validate =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = Joi.compile(schema)
      .prefs({ errors: { label: "key" } })
      .validate(req.body);

    if (error) {
      const errorMessage = error.details
        .map((details) => details.message)
        .join(", ");
      return next(new AppError(httpStatus.BAD_REQUEST, errorMessage));
    }
    return next();
  };

export default validate;
