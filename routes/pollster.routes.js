function manageRouterPollster(io) {
  const { Router } = require("express");
  const PollsterController = require("../controllers/pollster.controller")(io);

  const router = Router();

  // API END-POINTS: GET
  router.get("/", PollsterController.getAllPollsters);
  router.get("/:pollsterId", PollsterController.getPollsterById);
  router.get("/random/points", PollsterController.generateRandomLocation);

  //router.get('/:', NannyController.getNannyById);

  // API END-POINTS: POST
  router.post("/", PollsterController.registerPollster);

  // Temp
  //router.post('/create', NannyController.preRegisterNanny);
  // API END-POINTS: PUT
  router.put("/:pollsterId", PollsterController.refreshLocation);

  // API END-POINTS: DELETE
  //router.delete('/:employeeId', EmployeeController.deleteEmployee);
  // API END-POINTS: PATCH
  return router;
}
module.exports = manageRouterPollster;
