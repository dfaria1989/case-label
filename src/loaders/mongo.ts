import config from '../config';
//import mongoose require('mongoose');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://mongodb:27017/case-label', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err: any) => {
    console.error(`MongoDB : ${err}`);
  });
