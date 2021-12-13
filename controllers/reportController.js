const { Reports } = require("../models");
const fs = require("fs");

const reportIndex = async (req, res) => {
  try {
    const reports = await Reports.findAll({ order: [["createdAt", "DESC"]] });
    return res.render("index", { reports: reports });
  } catch (error) {
    console.log(error);
  }
};

const newReportGet = (req, res) => {
  res.render("newPost");
};

const newReportPost = async (req, res) => {
  const { city, status, comment, user } = req.body;
  const image = req.file.filename;
  try {
    const createdAt = new Date();
    const updatedAt = null;
    await Reports.create({
      city,
      status,
      comment,
      user,
      image,
      createdAt,
      updatedAt
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const deleteReport = async (req, res) => {
  const { id, image } = req.params;
  try {
    await Reports.destroy({ where: { id } });
    fs.unlink(`public/assets/images/${image}`, (err) => {
      if (err) console.log(err);
    });
    return res.json({ redirect: "/" });
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getSingleReport = async (req, res) => {
  const { id } = req.params;
  try {
    const reports = await Reports.findOne({ where: { id } });
    return res.render("editPost", { reports: reports });
  } catch (error) {
    console.log(error);
  }
};

const updateReport = async (req, res) => {
  const { id, city, status, comment } = req.body;
  const updatedAt = new Date();
  try {
    await Reports.update(
      { city: city, status: status, comment: comment, updatedAt: updatedAt },
      { where: { id } }
    );
    return res.json({ redirect: "/" });
  } catch (error) {
    console.log(error);
  }
};

const searchCity = async (req, res) => {
  const { city } = req.params;
  try {
    cityReports = await Reports.findAll({ where: { city } });
    return res.render("index", { reports: cityReports });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  reportIndex,
  newReportGet,
  newReportPost,
  deleteReport,
  getSingleReport,
  updateReport,
  searchCity,
};
