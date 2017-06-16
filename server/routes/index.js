const router = require('express').Router();
const controller = require('../controller/index.js');

router.get('/building', controller.building.get);

router.post('building', controller.building.post);

router.get('units', controller.units.get);

router.post('units', controller.units.post);

module.exports = router;
