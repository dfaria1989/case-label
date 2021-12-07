import mongoose from 'mongoose';
import config from '../config';

mongoose.connect(`${config.database.MONGODB_URI}${config.database.MONGODB_DB_MAIN}`, {
  serverSelectionTimeoutMS: 20000,
  connectTimeoutMS: 20000
});
