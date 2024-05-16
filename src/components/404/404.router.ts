import { Router, Request, Response } from "express";
import httpStatus from "http-status";

const router = Router();
router.all("*", (req: Request, res: Response) => {
  return res.status(httpStatus.NOT_FOUND).json({
    error: "Not found",
  });
});

export default router;
