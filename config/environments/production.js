module.exports = {
  PORT: process.env.PORT,
  SUBDOMAIN:process.env.SUBDOMAIN_PRODUCTION,
  DATABASE: {
    username: process.env.DB_USER_PRODUCTION,
    password: process.env.DB_PASS_PRODUCTION,
    database: process.env.DB_NAME_PRODUCTION,
    host: process.env.DB_HOST_PRODUCTION,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        requestTimeout: parseInt(process.env.SEQUELIZE_TIMEOUT_PRODUCTION),
        encrypt: false,
        trustServerCertificate: true,
      },
    },
  },
  API_SMS_TWILIO: {
    acoountSid: process.env.TWILIO_ACCOUNT_SID_PRODUCTION,
    authToken: process.env.TWILIO_AUTH_TOKEN_PRODUCTION,
    phoneFrom: process.env.TWILIO_PHONE_FROM_PRODUCTION,
  },
  FIREBASE: {
    projectId: process.env.FIREBASE_PROJECT_ID_PRODUCTION,
    bucket: process.env.BUCKET_URL_PRODUCTION,
    apikeyJson: process.env.FIREBASE_BUCKET_API_KEY_FILENAME_PRODUCTION,
  },
  GOOGLE_OAUTH2:{
    refreshToken: process.env.GOOGLE_OAUTH2_REFRESH_TOKEN_PRODUCTION,
    redirectUri:process.env.GOOGLE_OAUTH2_REDIRECT_URI_PRODUCTION,
    clientId:process.env.GOOGLE_OAUTH2_CLIENT_ID_PRODUCTION,
    clientSecret:process.env.GOOGLE_OAUTH2_CLIENT_SECRET_PRODUCTION
  },
  PASSWORD_RECOVER:{
    secret_key:process.env.SECRET_KEY_PASSWORD_CHANGE_TOKEN_PRODUCTION
  }
};