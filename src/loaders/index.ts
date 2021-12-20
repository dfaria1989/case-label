import expressLoader from './express';
import LoggerInstance from './winston';
import './mongo';

const expressInit = ({ expressApp }: { expressApp: any }): any => expressLoader({ app: expressApp });
const Logger = LoggerInstance;
export { expressInit, Logger };
