require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyParser.json());

const servicesRoute = require("./routes/servicesController");

const { DB_CONNECTION } = process.env;

app.use("/info", servicesRoute);

mongoose.connect(
  DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("db connected")
);

let port = 4000 || 5000;

app.listen(port, () => console.log(`server is up on port ${port}`));
