import { createLogger, format, transports, config } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const { combine, timestamp, errors, splat, json, simple, colorize } = format;

const transportsArray = [];

if (process.env.NODE_ENV === "production") {
  const logConfig = {
    logFolder: ".//logs//",
    logFile: `log-%DATE%.log`,
  };

  const rotateConfig = {
    filename: `${logConfig.logFolder}${logConfig.logFile}`,
    datePattern: "YYYY-MM-DD-HH",
    zippedArchive: false,
    maxSize: "20m",
    maxFiles: "10d",
    json: true,
  };

  transportsArray.push(new DailyRotateFile(rotateConfig));
}

const logger = createLogger({
  level: process.env.LOG_LEVEL,
  levels: config.npm.levels,
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    errors({ stack: true }),
    splat(),
    json()
  ),
  // defaultMeta: { service: name },
  transports: transportsArray,
  exitOnError: false,
});

// Log to the `console` with the colorized simple format.
logger.add(
  new transports.Console({
    format: combine(simple(), colorize()),
  })
);

export default logger;
