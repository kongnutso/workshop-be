const dotenv = require('dotenv');

dotenv.config();

const { env } = process;

module.exports = {
  development: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    host: env.DB_HOST,
    // host: 'localhost',
    dialect: 'postgres',
    logging: false,
    // port: 5431,
  },
  test: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    host: env.DB_HOST,
    dialect: 'postgres',
  },
  staging: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    host: env.DB_HOST,
    logging: false,
    dialect: 'postgres',
    maxPool: 30,
  },
  production: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    host: env.DB_HOST,
    logging: false,
    dialect: 'postgres',
  },
};
