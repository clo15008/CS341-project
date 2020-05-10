const express = require('express');
const router = express.Router();
var jsonEngine = require('../controller/p03Json.js')

router.get('/', jsonEngine.processJson);
//route to id

module.exports = router;