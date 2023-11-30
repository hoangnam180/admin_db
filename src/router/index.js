const authRouter = require("./auth");
const siteRouter = require("./site");
const userRouter = require("./user");

const initWebRoute = (app) => {
  app.use("/", siteRouter);
  app.use("/api/v1/auth", authRouter);
  app.use("/api/user",  userRouter);
};

module.exports = initWebRoute;
