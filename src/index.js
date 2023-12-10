const express = require("express");
const initWebRoute = require("./router/index.js");
const configViewEngine = require("./config/viewEngine");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
const session = require('express-session');

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
const port = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");

app.use(morgan("combined"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Uncomment this section if you intend to use sessions
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

//config view engine
configViewEngine(app);

//init web route
initWebRoute(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
