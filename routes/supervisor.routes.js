function managePollsterRoutes(io) {
  const { Router } = require("express");
  const SupervisorController = require("../controllers/supervisor.controller")(
    io
  );

  const router = Router();

  //SupervisorController.io = 1;
  // API END-POINTS: GET
  router.get("/", SupervisorController.getAllSupervisors);
  //router.get('/:parentsId', ParentsController.getParentsById);

  // API END-POINTS: POST
  router.post("/", SupervisorController.registerSupervisor);
  // API END-POINTS: PUT

  // API END-POINTS: DELETE
  //router.delete('/:nannyId', nannyController.delete);
  // API END-POINTS: PATCH
  return router;
}

module.exports = managePollsterRoutes;
