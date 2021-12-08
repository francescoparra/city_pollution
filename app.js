const express = require("express");
const app = express();
const dotenv = require("dotenv");
const blogRoutes = require("./routes/reportRoutes")
dotenv.config();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(blogRoutes)

// Connection

const port = process.env.PORT;
app.listen(port, () => console.log(`Running on http://localhost:${port}`));
