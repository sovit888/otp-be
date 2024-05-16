import { Router } from "express";
import { getOtp, verifyOtp } from "./otp.controller";
import validate from "@/middleware/validate.middleware";
import { otpValidation } from "./otp.validation";

const router = Router();
router
  .route("/otp")
  .get(getOtp)
  .post([validate(otpValidation.body)], verifyOtp);

export default router;
