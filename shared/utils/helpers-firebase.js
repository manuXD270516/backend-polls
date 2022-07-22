require('dotenv').config();
const { NODE_ENV } = process.env;
const { environments } = require('./environments');
const envLocal = require('../../config/environments/local');
const envDevelop = require('../../config/environments/development');
const envQa = require('../../config/environments/qa');
const envProduction = require('../../config/environments/production');

let currentEnvironment = envLocal; // default scope


switch (NODE_ENV) {
  case environments.DEVELOP_ENVIRONMENT:
    currentEnvironment = envDevelop;
    break;
  case environments.QA_ENVIRONMENT:
    currentEnvironment = envQa;
    break;
  case environments.PRODUCTION_ENVIRONMENT:
    currentEnvironment = envProduction;
    break;
  default:
    console.log('local environment used');
    // local (not using)
    break;
}
let {
  FIREBASE: {
    apikeyJson: firebaseProjectApiKey,
    bucket: firebaseBucketName,
    projectId: firebaseProjectId,
  },
} = currentEnvironment;

const { ROOT_DIR } = require('../../settings');

module.exports = {
  TEST_APP_KEY:
    'dyj90ev9TYiorlmuyZJIoi:APA91bHjf4aFTV9X3K457u3IQh-60k7cu5XTVGQTLQIxqWDlu27Vw11SVM6DHQgR02X8xsgx83nKKMhg2HyPwzMxysTMpDWj-STi5i1hUzhrykZNDNDzPX-WHYGHbRf-CKQQJ2DabtVm',
  MESSAGING_SCOPE: 'https://www.googleapis.com/auth/firebase.messaging',
  FIREBASE_BUCKET_NAME: firebaseBucketName,
  FIREBASE_PROJECT_ID: firebaseProjectId,
  API_KEY_FIREBASE: firebaseProjectApiKey,
  PATH_API_KEY_FIREBASE: `${ROOT_DIR}/config/keys/${firebaseProjectApiKey}`,
};
