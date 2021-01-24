const express = require('express');
const router = express.Router();

const dependencyInjector = require('../dependency-injector');
const exampleController = dependencyInjector.inject('exampleController');

router.get('/example', exampleController.getExamples);
router.get('/example/:id', exampleController.getSpecificExample);

router.post('/example', exampleController.postExample);

router.put('/example', exampleController.updateExamples);
router.put('/example/:id', exampleController.updateSpecificExample);

router.delete('/example', exampleController.deleteExamples);
router.delete('/example/:id', exampleController.deleteSpecificExample);

module.exports = router;