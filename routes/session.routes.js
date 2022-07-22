const { Router } = require('express');
const router = Router();

const { UserController } = require('../controllers/');

// APIS END-POINTS: GET

// APIS END-POINTS: POST
router.post('/signin/:userType', UserController.authenticateUser);
router.post('/signoff:userId', UserController.logoutUser);

// APIS END-POINTS: PUT

// APIS END-POINTS: DELETE

// APIS END-POINTS: PATCH

module.exports = router;
