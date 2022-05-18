process.env.JWT_SECRET = 'MERN-secret';

const URL_AUTH_SERVER = process.env.URL_AUTH_SERVER || 'http://192.168.1.37';
const PORT_AUTH_SERVICE = process.env.PORT_AUTH_SERVICE || 81;
const config = {
  appURL: process.env.URL || 'http://192.168.1.45',
  appPort: process.env.PORT || 8000,
  mongoURL: process.env.URL_MONGO || 'mongodb://localhost:27017/MERN',
  jwtSecret: process.env.JWT_SECRET,
  jwtExpires: '1d',
  authServer: URL_AUTH_SERVER,
  authServicePort: PORT_AUTH_SERVICE,
  authServiceURL: `${URL_AUTH_SERVER}:${PORT_AUTH_SERVICE}`,
  authInfo: {
    key: 'training_course',
    version: '1.0.0',
    name: 'test project',
    permissions: {
      supermanager: 'super manager',
      admin: 'normal manager',
      monitor: 'head of users',
      user: 'normal user',
    }
  }
};

module.exports = config;
