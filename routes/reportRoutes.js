const express = require("express");
const upload = require("../controllers/multerController");
const multerError = require("../controllers/multerErrorController");
const reportController = require("../controllers/reportController");

const router = express.Router();

// create

router.get("/new-post", reportController.newReportGet);

router.post("/insert", upload.single("image"), multerError, reportController.newReportPost);

// read

router.get("/", reportController.reportIndex);

// update

router.get("/edit/:id", reportController.getSingleReport);
router.patch("/update/:id", reportController.updateReport);

// delete

router.delete("/delete/:id/:image", reportController.deleteReport);

// search

router.get("/search/:city", reportController.searchCity);

// 404

router.get("*", reportController.errorPage);

module.exports = router;
