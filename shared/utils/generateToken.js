const { google } = require('googleapis');

const { PATH_API_KEY_FIREBASE, MESSAGING_SCOPE } = require('./helpers-firebase');

const SCOPES = [MESSAGING_SCOPE];

// to get The AccessToken to be able to send notifications via HTTP v1 from Postman
let getAccessToken = () => {
  return new Promise(function (resolve, reject) {
    var key = require(PATH_API_KEY_FIREBASE);
    var jwtClient = new google.auth.JWT(key.client_email, null, key.private_key, SCOPES, null);
    jwtClient.authorize(function (err, tokens) {
      if (err) {
        reject(err);
        return;
      }
      resolve(tokens.access_token);
    });
  });
};

module.exports = { getAccessToken };
