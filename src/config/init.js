const dotenv = require('dotenv');
const path = require('path');

let envFound = ""
let environment = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'development';
if (environment !== 'development') {
    let newPath = environment === 'production' ? `../../../.env.${environment}` : `../../.env.${environment}`;
    envFound = dotenv.config({
        path: path.resolve(__dirname, newPath)
    });
} else {
    envFound = dotenv.config();
}

if (envFound.error) {
    throw 'Couldnt find .env file';
}