require('newrelic');
const dbConnect = require("../database/mongodb/mongodbutil.js").connectToServer();
const express = require("express");
const port = 1337;
const app = express();
const router = require("./router/router.js");
const path = require("path");
const morgan = require("morgan");
const compression = require('compression');

app.use(compression());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(morgan('dev'));
//app.use("/home", router.home);

app.listen(port, err => {
  if (err) {
    console.log("Failure connecting to server");
  } else {
    console.log(`Listening on port ${port}!`);
  }
});