const express = require('express');
const router = express.Router();
const controller = require('../controller/p05-controller');



router.get('/',(req, res, next) => {
    const backgroundColor = "background-color:" + req.get('Cookie').split(';')[1].trim().split('=')[1];
    console.log(backgroundColor);
    res.render('pages/p05.ejs', { 
        title: 'Prove 05', 
        path: '/p05', // For pug, EJS
        color: backgroundColor
    });
});

router.get('/p05-signup', controller.signUp);

//   /p05/addUser
router.post('/addUser', controller.addUser);

//   /p05/authenticate
router.post('/change-style', controller.changeColor);

module.exports = router;