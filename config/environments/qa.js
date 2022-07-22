module.exports = {
  PORT: process.env.PORT,
  SUBDOMAIN:process.env.SUBDOMAIN_QA,
  DATABASE: {
    username: process.env.DB_USER_QA,
    password: process.env.DB_PASS_QA,
    database: process.env.DB_NAME_QA,
    host: process.env.DB_HOST_QA,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        requestTimeout: parseInt(process.env.SEQUELIZE_TIMEOUT_QA),
        encrypt: true,
        trustServerCertificate: true,
      },
    },
  },
  API_SMS_TWILIO: {
    acoountSid: process.env.TWILIO_ACCOUNT_SID_DEVELOPMENT,
    authToken: process.env.TWILIO_AUTH_TOKEN_DEVELOPMENT,
    phoneFrom: process.env.TWILIO_PHONE_FROM_DEVELOPMENT,
  },
  FIREBASE: {
    projectId: process.env.FIREBASE_PROJECT_ID_QA,
    bucket: process.env.BUCKET_URL_QA,
    apikeyJson: process.env.FIREBASE_BUCKET_API_KEY_FILENAME_QA,
  },
  GOOGLE_OAUTH2:{
    refreshToken: process.env.GOOGLE_OAUTH2_REFRESH_TOKEN_QA,
    redirectUri:process.env.GOOGLE_OAUTH2_REDIRECT_URI_QA,
    clientId:process.env.GOOGLE_OAUTH2_CLIENT_ID_QA,
    clientSecret:process.env.GOOGLE_OAUTH2_CLIENT_SECRET_QA
  }
  ,PASSWORD_RECOVER:{
    secret_key:process.env.SECRET_KEY_PASSWORD_CHANGE_TOKEN_QA
  }
};