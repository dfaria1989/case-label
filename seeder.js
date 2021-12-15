/* eslint-disable @typescript-eslint/no-var-requires */
const { config } = require('dotenv');
const { resolve } = require('path');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

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

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
});

const modelUser = mongoose.model('user', userSchema);

(async () => {
  try {
    const conditions = JSON.parse(fs.readFileSync('./seeds/conditions.json'));
    await mongoose.connect('mongodb://mongodb:27017/case-label');
    await modelCondition.deleteMany(); //mongo:27017/
    await modelCondition.create(conditions);
    await modelUser.deleteMany();

    const passwordHashed = await bcryptjs.hash('admin', 10);
    await modelUser.create({
      username: 'admin',
      password: passwordHashed
    });
  } catch (error) {
    console.error(error);
  }
  process.exit();
})();
