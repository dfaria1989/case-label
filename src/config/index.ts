import './init';

export default {
  api: {
    prefix: '/api/'
  },
  database: {
    MONGODB_URI: 'mongodb://localhost:27017/',
    MONGODB_DB_MAIN: 'case-label'
  },
  jwt_secret: process.env.JWT_SECRET
};
