const dotenv = require('dotenv');

const isDev = process.env.NODE_ENV !== 'production';

if (isDev) {
  dotenv.config({ path: './.env.dev' });
} else {
  dotenv.config();
}

const config = {
  isDev,
  port: process.env.PORT || 3000,
};

module.exports = config;
