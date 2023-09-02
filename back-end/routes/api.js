const express = require('express');
const router = express.Router();
const shipmentController = require('../controllers/shipmentController');

router.post('/shipping_calculate', shipmentController.calculateShipping);

module.exports = router;
