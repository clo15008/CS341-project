//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
var jsonEngine = require('../controller/jsonEngine.js')

router.get('/', jsonEngine.processJson);
// (req, res, next) => {
//     res.render('pages/ta03', { 
//         title: 'Team Activity 03', 
//         path: '/ta03', // For pug, EJS 
//         activeTA03: true, // For HBS
//         contentCSS: true, // For HBS
//     });
// });

module.exports = router;