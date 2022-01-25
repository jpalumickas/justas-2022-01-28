const path = require('path');

const environment = process.env.ENVIRONMENT || 'development';
const envPath = path.join(__dirname, `.env.${environment}`);
require('dotenv').config({ path: envPath });

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~': './src',
        },
      },
    ],
  ],
};
