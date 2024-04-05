import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  FIXED_TERM_MICROSERVICE_HOST: string;
  FIXED_TERM_MICROSERVICE_PORT: number;
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
    FIXED_TERM_MICROSERVICE_HOST: joi.string().required(),
    FIXED_TERM_MICROSERVICE_PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  fixedTermMicroserviceHost: envVars.FIXED_TERM_MICROSERVICE_HOST,
  fixedTermMicroservicePort: envVars.FIXED_TERM_MICROSERVICE_PORT,
};
