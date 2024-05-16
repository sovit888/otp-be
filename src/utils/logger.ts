import winston from "winston";

import config from "@/config/config";
const { isDev } = config.app;

const errorStackFormat = winston.format((info) => {
  if (info instanceof Error) {
    return {
      ...info,
      stack: info.stack,
      message: info.message,
    };
  }
  return info;
});
const logTemplate = ({
  timestamp,
  level,
  message,
  stack,
}: winston.Logform.TransformableInfo) => {
  let tmpl = `${timestamp}`;
  tmpl += ` ${level} ${message}`;
  if (stack) tmpl += ` \n ${stack}`;
  return tmpl;
};

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const logger: winston.Logger = winston.createLogger({
  level: isDev ? "debug" : "info",
  levels,
  format: winston.format.combine(
    errorStackFormat(),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    isDev ? winston.format.colorize() : winston.format.uncolorize(),
    winston.format.splat(),
    winston.format.printf(logTemplate)
  ),
  transports: [
    new winston.transports.Console({
      stderrLevels: ["error"],
    }),
  ],
});

export default logger;
