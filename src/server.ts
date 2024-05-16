import app from "@/config/app";
import config from "@/config/config";
import logger from "@/utils/logger";
import { createServer } from "http";

const server = createServer(app);

server.listen(config.app.port, () => {
  logger.info(`server started at ${config.app.port}`);
});
