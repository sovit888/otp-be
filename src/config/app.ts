import express from "express";
import cors from "cors";
import errorHandling from "@/middleware/errorHandling.middleware";
import notFoundRouter from "@/components/404/404.router";
import otpRouter from "@/components/otp/otp.router";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", otpRouter);
app.use(errorHandling);
app.use(notFoundRouter);

export default app;
