import expressLoader from "./express";
import LoggerInstance from "./winston";
import database from "./mongo";

const expressInit = ({ expressApp }: { expressApp: any }): any =>
  expressLoader({ app: expressApp });
const Logger = LoggerInstance;
export { database, expressInit, Logger };
