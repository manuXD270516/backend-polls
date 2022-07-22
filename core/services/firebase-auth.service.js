const admin = require('firebase-admin');

const {
  PATH_API_KEY_FIREBASE,
  FIREBASE_BUCKET_NAME,
  FIREBASE_PROJECT_ID
} = require('../../shared/utils/helpers-firebase');

//const projectId = 'nannys-70a11';
const projectId = FIREBASE_PROJECT_ID;

let initFirebaseFromAuth = () => {
  console.log('========== INIT FIREBASE AUTH =============');
  const serviceAccount = require(PATH_API_KEY_FIREBASE);
  admin.apps.find((item) => item.name === projectId) ||
    admin.initializeApp(
      {
        credential: admin.credential.cert(serviceAccount),
      },
      projectId
    );
};

initFirebaseFromAuth();

/*const { getAuth, createUserWithEmailAndPassword } = require('firebase-admin');

const auth = getAuth();*/

let createUserFirebaseAuth = async ({ displayName, email, password, phoneNumber }) => {
  try {
    let projectAuth = admin.apps.find((app) => app.name === projectId);

    let userRecord = await projectAuth.auth().createUser({
      email,
      emailVerified: false,
      phoneNumber: `+591${phoneNumber}`,
      password,
      displayName,
      //photoURL: 'http://www.example.com/12345678/photo.png',
      disabled: false,
    });
    return userRecord;
  } catch (error) {
    return error.message;
  }
};

let signInFirebaseAuth = async () => {
  try {
    let projectAuth = admin.apps.find((app) => app.name === projectId);
    //projectAuth.auth().
  } catch (error) {}
};

/*createUserFirebaseAuth({
  displayName: 'Manuel Saavedra',
  email: 'manuel@gmail.com',
  password: '124121',
  phoneNumber: '78931221',
})
  .then((userRecord) => {
    console.log("USER REGISTERED =>");
    console.log(userRecord);
  })
  .catch((error) => console.log(error));*/

module.exports = {
  createUserFirebaseAuth,
};
