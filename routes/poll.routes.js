const { Router } = require("express");
const { PollController } = require("../controllers");

const router = Router();

// API END-POINTS: GET
router.get("/", PollController.getAllPolls);
router.get("/:pollId", PollController.getPollById);
router.get("/:userId/user", PollController.getAllPollsByUserId);

//router.get('/:parentsId', ParentsController.getParentsById);

// API END-POINTS: POST
router.post("/", PollController.registerPoll);
// API END-POINTS: PUT

// API END-POINTS: DELETE
//router.delete('/:nannyId', nannyController.delete);
// API END-POINTS: PATCH

module.exports = router;
