import { Response, Request } from "express";

export const verifyOtp = (req: Request, res: Response) => {
  return res.json({ success: "otp verified successfully" });
};

export const getOtp = (req: Request, res: Response) => {
  console.log(req.body);
  return res.json({ success: "get otp api works perfectly" });
};
