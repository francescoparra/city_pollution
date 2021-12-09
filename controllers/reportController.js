const DbService = require("../dbService");

const reportIndex = (req, res) => {
  const db = DbService.getDbServiceInstance();

  const result = db.getAllData();

  result
    .then((reports) => res.render("index", { reports: reports }))
    .catch((err) => console.log(err));
};

const newReportGet = (req, res) => {
  res.render("newPost");
};

const newReportPost = (req, res) => {
  const { city, status, comment, user } = req.body;
  const image = req.file.filename;
  const db = DbService.getDbServiceInstance();

  const result = db.createPost(city, status, comment, user, image);

  result.then(res.redirect("/")).catch((err) => console.log(err));
};

const deleteReport = (req, res) => {
  const { id, image } = req.params;
  const db = DbService.getDbServiceInstance();

  const result = db.deletePost(id, image);

  result.then(res.json({ redirect: "/" })).catch((err) => console.log(err));
};

const getSingleReport = (req, res) => {
  const { id } = req.params;
  const db = DbService.getDbServiceInstance();

  const result = db.getReportById(id);

  result
    .then((data) => res.render("editPost", { reports: data }))
    .catch((err) => console.log(err));
};

const updateReport = (req, res) => {
  const { id, city, status, comment } = req.body;
  const db = DbService.getDbServiceInstance();

  const result = db.patchReport(id, city, status, comment);

  result.then(res.json({ redirect: "/" })).catch((err) => console.log(err));
};

const searchCity = (req, res) => {
  const { city } = req.params;
  const db = DbService.getDbServiceInstance();

  const result = db.searchCity(city);

  result
    .then((data) => res.render("index", { reports: data }))
    .catch((err) => console.log(err));
};

module.exports = {
  reportIndex,
  newReportGet,
  newReportPost,
  deleteReport,
  getSingleReport,
  updateReport,
  searchCity
};
