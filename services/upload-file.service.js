const AUDIO_POLLS_FOLDER = "./public/upload/audio";
const { v4: uuidv4 } = require("uuid");

const uploadFile = async (file) => {
  return new Promise((resolve, reject) => {
    let fileName = `${file.name}-${uuidv4()}`;
    const path = `${AUDIO_POLLS_FOLDER}/${fileName}`;
    console.log(path);
    file.mv(path, (err) => {
      if (err) {
        reject({ fileUploaded: false, message: err });
      }
      resolve({
        fileUploaded: true,
        message: "file uploaded successfully",
        route: `/upload/audio/${fileName}`
      });
    });
  });
};

module.exports = {
  uploadFile
};
