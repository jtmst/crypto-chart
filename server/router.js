const express = require("express");
const router = express.Router();
const { getChartData } = require('./controller/coinbase.js')

router.get('/getChartData', getChartData)

module.exports = router;