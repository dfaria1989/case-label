/* eslint-disable @typescript-eslint/no-var-requires */
const { config } = require('dotenv');
const { resolve } = require('path');
const mongoose = require('mongoose');
const fs = require('fs');

let envFound;
const environment = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'development';
if (environment !== 'development') {
  const newPath = `.env.${environment}`;
  envFound = config({
    path: resolve(__dirname, newPath)
  });
} else {
  envFound = config();
}

if (envFound.error) {
  throw 'Couldnt find .env file';
}

const conditionSchema = new mongoose.Schema({
  ICD_10: {
    type: String,
    required: true
  },
  ICD_10_Description: {
    type: String,
    required: true
  }
});

const modelCondition = mongoose.model('condition', conditionSchema);
const conditions = JSON.parse(fs.readFileSync('./seeds/conditions.json'));

(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/case-label');
    await modelCondition.deleteMany(); //mongo:27017/
    const data = await modelCondition.create(conditions);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
  process.exit();
})();
