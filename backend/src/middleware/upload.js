const multer = require('multer');

// Stores the files in local storage as before sending to the database
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
});

const upload = multer({ storage });

module.exports = upload;