const express = require('express');
const router = express.Router();
const controller = require('../controller/p05-controller');

// router.get('/',(req, res, next) => {
//     res.render('pages/p04.ejs', { 
//         title: 'Prove 04', 
//         path: '/p04', // For pug, EJS 
//         activeTA03: true, // For HBS
//         contentCSS: true, // For HBS
//     });
// });

router.get('/',(req, res, next) => {
    const backgroundColor = "background-color:" + req.get('Cookie').split(';')[1].trim().split('=')[1];
    console.log(backgroundColor);
    res.render('pages/p05.ejs', { 
        title: 'Prove 05', 
        path: '/p05', // For pug, EJS
        color: backgroundColor
    });
});

// router.post('/change-style',(req, res, next) => {
//     res.setHeader('Set-Cookie', req.body);
//     res.setHeader('Set-Cookie', 'counter=0');
//     res.redirect('/');

//     console.log(req.body);
// });

router.post('/change-style', controller.changeColor);

module.exports = router;