var express = require('express');
var router = express.Router();

const meController = require('../app/controllers/MeController');

// meController.index

router.get('/stored/courses', meController.storeCourses);

module.exports = router;
