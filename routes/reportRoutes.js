const express = require("express");
const multer = require("multer");
const reportController = require("../controllers/reportController");

const router = express.Router();

// multer

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `../progetto2prova/public/assets/images`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

// create

router.get("/new-post", reportController.newReportGet);

router.post("/insert", upload.single("image"), reportController.newReportPost);

// read

router.get("/", reportController.reportIndex);

// update

// delete

router.delete("/delete/:id", reportController.deleteReport);

// search

router.get("/search/:city", reportController.searchCity);

module.exports = router;
