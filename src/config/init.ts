import { config } from 'dotenv';
import { resolve } from 'path';

let envFound: any;
const environment = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'development';
if (environment !== 'development') {
  const newPath = environment === 'production' ? `../../../.env.${environment}` : `../../.env.${environment}`;
  envFound = config({
    path: resolve(__dirname, newPath)
  });
} else {
  envFound = config();
}

if (envFound.error) {
  throw 'Couldnt find .env file';
}
