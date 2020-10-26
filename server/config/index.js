const {
  DB_USER,
  DB_PASSWD,
  DB_NAME,
  DB_HOST,
  JWT_SECRET_KEY,
  GITHUB_OAUTH_CLIENTID,
  GITHUB_OAUTH_SECRET,
  GITHUB_OAUTH_CALLBACK,
} = process.env;
const config = {
  development: {
    username: DB_USER,
    password: DB_PASSWD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'mysql',
    secretKey: JWT_SECRET_KEY,
    githubOauthClientID: GITHUB_OAUTH_CLIENTID,
    githubOauthSecret: GITHUB_OAUTH_SECRET,
    githubOauthCallback: GITHUB_OAUTH_CALLBACK,
  },
  production: {
    username: DB_USER,
    password: DB_PASSWD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'mysql',
  },
};
module.exports = config;
