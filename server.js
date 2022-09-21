const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const indexRouter = require("./routes/index");
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
// view engine setup
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));
app.use("/", indexRouter);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
