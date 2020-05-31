const express = require('express');
const router = express.Router();
const controller = require('../controller/p05-controller');

// ROUTES


// Route 
// router.get('/',(req, res, next) => {
//     const backgroundColor = "background-color:" + req.get('Cookie').split(';')[1].trim().split('=')[1];
//     console.log(backgroundColor);
//     res.render('pages/p05.ejs', { 
//         title: 'Prove 05', 
//         path: '/p05', // For pug, EJS
//         color: backgroundColor,
//         login: req.session.isLoggedIn
//     });
// });

router.get('/p05-signup', controller.signUp);

//   /p05/addUser
router.post('/addUser', controller.addUser);

//   change background color
// router.post('/change-style', controller.changeColor);

router.get('/p05-login', controller.login);

router.post('/p05-postLogin', controller.postLogin);

router.post('/logout', controller.logout);

module.exports = router;