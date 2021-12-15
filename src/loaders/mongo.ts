import config from '../config';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb://mongodb:27017/case-label', {
    socketTimeoutMS: 30000,
    serverSelectionTimeoutMS: 30000,
    connectTimeoutMS: 30000
  })
  .then(() => console.info(`OK`))
  .catch((err: any) => {
    console.error(`MongoDB : ${err}`);
  });
