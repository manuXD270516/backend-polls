module.exports = {
  PORT: process.env.PORT,
  SUBDOMAIN:process.env.SUBDOMAIN_DEVELOPMENT,
  DATABASE: {
    username: process.env.DB_USER_DEVELOPMENT,
    password: process.env.DB_PASS_DEVELOPMENT,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOST_DEVELOPMENT,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        requestTimeout: parseInt(process.env.SEQUELIZE_TIMEOUT_DEVELOPMENT),
        encrypt: false,
        trustServerCertificate: true,
      },
    },
    //logging: true
  },
  API_SMS_TWILIO: {
    acoountSid: process.env.TWILIO_ACCOUNT_SID_DEVELOPMENT,
    authToken: process.env.TWILIO_AUTH_TOKEN_DEVELOPMENT,
    phoneFrom: process.env.TWILIO_PHONE_FROM_DEVELOPMENT,
  },
  FIREBASE: {
    projectId: process.env.FIREBASE_PROJECT_ID_DEVELOP,
    bucket: process.env.BUCKET_URL_DEVELOP,
    apikeyJson: process.env.FIREBASE_BUCKET_API_KEY_FILENAME_DEVELOPMENT,
  },
  GOOGLE_OAUTH2:{
    refreshToken: process.env.GOOGLE_OAUTH2_REFRESH_TOKEN_DEVELOPMENT,
    redirectUri:process.env.GOOGLE_OAUTH2_REDIRECT_URI_DEVELOPMENT,
    clientId:process.env.GOOGLE_OAUTH2_CLIENT_ID_DEVELOPMENT,
    clientSecret:process.env.GOOGLE_OAUTH2_CLIENT_SECRET_DEVELOPMENT
  },PASSWORD_RECOVER:{
    secret_key:process.env.SECRET_KEY_PASSWORD_CHANGE_TOKEN_DEVELOPMENT
  }
  
};
