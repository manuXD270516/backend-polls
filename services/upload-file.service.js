const AUDIO_POLLS_FOLDER = "./public/upload/audio";

const uploadFile = async (file) => {
  return new Promise((resolve, reject) => {
    let fileName = file.name;
    file.mv(`${AUDIO_POLLS_FOLDER}/${fileName}`, (err) => {
      if (err) {
        reject({ fileUploaded: false, message: err });
      }
      resolve({
        fileUploaded: true,
        message: "file uploaded successfully",
        route: `/upload/audio/${file.name}`
      });
    });
  });
};

module.exports = {
  uploadFile
};
