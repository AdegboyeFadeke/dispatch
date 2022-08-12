 const express = require('express');

 const router = express.Router();
 const dispatchController = require('../controller/dispatch');

 router.post('/add', dispatchController.addDrone);


 module.exports = router;