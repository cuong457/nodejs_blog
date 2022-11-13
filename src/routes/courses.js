var express = require('express');
var router = express.Router();

const courseController = require('../app/controllers/CourseController');

// courseController.index

router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.delete);
router.get('/:slug', courseController.show);

module.exports = router;
