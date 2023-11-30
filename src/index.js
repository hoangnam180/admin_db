const express = require("express");
const initWebRoute = require("./router/index.js");
const configViewEngine = require("./config/viewEngine");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true })); // Use express.urlencoded() for form data
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser("your_secure_secret_here"));

// Uncomment this section if you intend to use sessions
// app.use(session({
//   secret: process.env.SECRET,
//   resave: false,
//   saveUninitialized: true
// }));

// Configure view engine
configViewEngine(app);

// Initialize web routes
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
