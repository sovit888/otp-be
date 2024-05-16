import AppError from "@/utils/appError";
import { Request, Response, NextFunction } from "express";

const errorHandling = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.httpCode).json({ error: err.message });
  }
  return res.status(500).json({
    error: "internal server error",
  });
};

export default errorHandling;
