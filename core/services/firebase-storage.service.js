require('dotenv').config();
var admin = require('firebase-admin');
const crypto = require('crypto');
const Multer = require('multer');
const uuid = require('uuid');
const { v4: uuidv4 } = require('uuid');

//const { NannysFirebaseServicesAccount: serviceAccount } = require('../../config/keys');
const { resolve } = require('path');
const { asyncForEach } = require('../../shared/utils/arrays');

// BUCKET do storage - somente o endereco
const {
  PATH_API_KEY_FIREBASE,
  FIREBASE_BUCKET_NAME,
  FIREBASE_PROJECT_ID
} = require('../../shared/utils/helpers-firebase');

const BUCKET = FIREBASE_BUCKET_NAME;

console.log('============== BUCKET FIREBASE SELECTED ============');
console.log(BUCKET);

// Relocate Folders
const FOLDER_NANNYS = 'files-nannys';
const FOLDER_EMPLOYEES = 'files-employes';
const FOLDER_PARENTS = 'files-parents';
const FOLDER_REQUIREMENTS_REGISTER_NANNYS = `${FOLDER_NANNYS}/requirements-register`;

admin.initializeApp({
  credential: admin.credential.cert(PATH_API_KEY_FIREBASE),
  storageBucket: BUCKET,
});

// Intancia do BUCKET
const bucket = admin.storage().bucket();

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
  },
});

const uploadFile = async (file, container) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject({ success: false, errorMessage: 'file not found' });
    }
    const fileName = `${Math.floor(Math.random() * 65536)}-${crypto
      .createHash('sha256')
      .update(file.originalname)
      .digest('hex')
      .toString()}-${file.originalname}`;

    const file_in_bucket = bucket.file(`${container}/${fileName}`);

    // Send file for stream
    const stream = file_in_bucket.createWriteStream({
      metadata: {
        contentType: file.mimetype,
        //firebaseStorageDownloadTokens: uuidv4(),
      },
      public: true,
    });

    stream.on('error', (e) => {
      reject({ success: false, errorMessage: e });
    });

    stream.on('finish', async () => {
      // Tornar o arquivo publico
      try {
        await file_in_bucket.makePublic();
        resolve({
          success: true,
          publicFileUrl: `https://storage.googleapis.com/${BUCKET}/${fileName}`,
        });
      } catch (error) {
        reject({ success: false, errorMessage: error });
      }
      stream.end(file.buffer);
    });
  });
};

const uploadFileInBase64 = async (fileDTO, container) => {
  return new Promise((resolve, reject) => {
    let { MimeType, FileContent, FileName, FileDocumentTypeId, FileDocumentId = false } = fileDTO;
    // console.log('FILE DOCUMENTS');
    //console.log({  FileContent });

    let Extension = MimeType.split('/')[1];

    FileName = `${FileName.replace(/\s/g, '-')}_${new Date().toISOString()}.${Extension}`;

    //base64EncodedImageString = image.replace(/^data:image\/\w+;base64,/, ''),
    let imageBuffer = Buffer.from(String(FileContent), 'base64');

    // Upload the image to the bucket

    var file = bucket.file(`${container}/${FileName}`);

    const pathFile = `${BUCKET}/${container}`;

    try {
      file.save(imageBuffer, {
        metadata: { contentType: MimeType }, //req.body.profile.extension },
        public: true,
        validation: 'md5',
      });
      let result = {
        sucess: true,
        fileUpload: {
          Extension,
          FileDocumentTypeId,
          FileUrl: `https://storage.googleapis.com/${pathFile}/${FileName}`,
        },
      };
      if (FileDocumentId) {
        result = {
          FileDocumentId,
          ...result,
        };
      }
      resolve(result);
    } catch (e) {
      console.log(e);
      reject({ success: false, errorMessage: e });
    }
  });
};

const uploadFilesInBase64 = async (Files) => {
  try {
    let uploadFilesResponse = [];
    await asyncForEach(Files, async ({ FileDTO, Container }) => {
      let { fileUpload } = await uploadFileInBase64(FileDTO, Container);
      //console.log('publicFileUrl: ', publicFileUrl);
      uploadFilesResponse.push(fileUpload);
    });
    return { uploadSuccess: true, uploadFilesResponse };
  } catch (error) {
    console.log(error);
    return { uploadSuccess: false, errorMessage: error };
  }
};

module.exports = { uploadFile, uploadFileInBase64, uploadFilesInBase64 };
