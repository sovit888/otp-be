import Joi from "joi";
import * as dotenv from "dotenv";

dotenv.config();

const envsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "test", "development")
      .default("development"),
    PORT: Joi.number(),
  })
  .unknown(true);

const { value: envVars, error } = envsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);
if (error) {
  throw new Error(
    `Config validation error: ${error.message}. \n
     This app requires env variables to work properly.`
  );
}

// map env vars and make it visible outside module
export default {
  app: {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    isDev: envVars.NODE_ENV == "development",
  },
};
