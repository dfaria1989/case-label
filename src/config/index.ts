import './init';

console.log(process.env.MONGODB_URI);
export default {
  api: {
    prefix: '/api/'
  },
  database: {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://mongo:27017/',
    MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN || 'case-label'
  }
};
