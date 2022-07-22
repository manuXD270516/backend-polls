const admin = require('firebase-admin');

const { PATH_API_KEY_FIREBASE } = require('../../shared/utils/helpers-firebase');

const projectId = 'nannys-70a11';
//const API_KEY_FIREBASE = 'nannys-70a11-firebase-adminsdk-84h09-a0e60722da';


let initFirebase = () => {
  const serviceAccount = require(PATH_API_KEY_FIREBASE);
  admin.apps.find((item) => item.name === projectId) ||
    admin.initializeApp(
      {
        credential: admin.credential.cert(serviceAccount),
      },
      projectId
    );
  //console.log(projectPushNotifications);  
  /*admin.initializeApp(
    {
      credential: admin.credential.cert(serviceAccount),
    },
  );*/

  /*admin.initializeApp(
  {
    credential: admin.credential.cert(serviceAccount),
  },
  'nannys-70a11'
);*/

  /*console.log(admin.apps);
  if (admin.apps.length) {
    admin.app();
  } else {
    admin.initializeApp(
      {
        credential: admin.credential.cert(serviceAccount),
      },
      'nannys-70a11'
    );
  }*/
};

initFirebase();

let sendPushToOneUser = async (notification) => {
  console.log("---------------------NOTIFICATION============");
  console.log(notification);
  /*const message = {
    token: notification.tokenId,
    notification: {
      title: 'Default Title',
      body: 'Offer presentation',
    },
    token: notification.tokenId,
    /*data: {
      titulo: notification.titulo,
      mensaje: notification.mensaje,
    },*
  };*/
  await sendMessage(notification);
};

let sendPushToTopic = async (notification) => {
  const message = {
    topic: notification.topic,
    data: {
      titulo: notification.titulo,
      mensaje: notification.mensaje,
    },
  };
  await sendMessage(message);
};

let sendMessage = async (message) => {
  try {
    //console.log(admin.apps);
    let projectPushNotifications = admin.apps.find((app) => app.name === projectId);

    
    //console.log(projectPushNotifications);
    let response = await projectPushNotifications.messaging().send(message);
    //let response = await admin.messaging().send(message);
    console.log('Successfully sent message:', response);
  } catch (error) {
    console.log('Error sending message:', error);
  }
};

module.exports = { sendPushToOneUser, sendPushToTopic };
