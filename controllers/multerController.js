const multer = require("multer");
const imgsDir = "public/assets/images";

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imgsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const fileType = (req, file, cb) => {
  const ext = file.mimetype;
  if (ext !== "image/jpeg" && ext !== "image/png" && ext !== "image/gif") {
    req.fileValidationError = "Wrong extension. Just images allowed!";
    return cb(null, false, req.fileValidationError);
  }
  cb(null, true);
};

const upload = multer({
  storage: fileStorageEngine,
  limits: { fileSize: 1024 * 1024 * 10 },
  fileFilter: fileType
});

module.exports = upload;
