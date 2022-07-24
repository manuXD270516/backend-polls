function manageRoutes(io) {
  const express = require("express");
  const cors = require("cors");
  const compression = require("compression");
  const bodyParser = require("body-parser");
  const { Router } = require("express");

  const router = Router();
  const apiRouter = Router();

  const { UserType } = require("../shared/utils/database-sequelize");

  const UsersRoutes = require("./users.routes");
  const SessionRoutes = require("./session.routes");
  const SupervisorRoutes = require("./supervisor.routes")(io);
  const PollsterRoutes = require("./pollster.routes")(io);
  const PollRoutes = require("./poll.routes");

  const {
    verifyTokenAuthorization
  } = require("../shared/middlewares/auth-token-jwt");

  router.use(express.static("public"));

  apiRouter
    .use(cors())
    .use(
      bodyParser.json({
        extended: true,
        limit: "100mb"
      })
    )
    .use(
      bodyParser.urlencoded({
        extended: true,
        limit: "100mb"
      })
    )
    .use(compression());

  apiRouter.use("/session", SessionRoutes);
  apiRouter.use("/supervisor", SupervisorRoutes);
  apiRouter.use("/pollster", PollsterRoutes);
  apiRouter.use("/poll", PollRoutes);

  /* apiRouter.use(
  verifyTokenAuthorization(UserType.USER_NANNY, UserType.USER_PARENTS, UserType.USER_EMPLOYEE)
); */

  router.use("/api", apiRouter);

  return router;
}

module.exports = manageRoutes;
