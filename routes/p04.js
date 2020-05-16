const express = require('express');
const router = express.Router();
const controller = require('../controller/p04-controller');

// router.get('/',(req, res, next) => {
//     res.render('pages/p04.ejs', { 
//         title: 'Prove 04', 
//         path: '/p04', // For pug, EJS 
//         activeTA03: true, // For HBS
//         contentCSS: true, // For HBS
//     });
// });

router.get('/', controller.getProducts);

router.get('/addProduct',(req, res, next) => {
    res.render('pages/p04-addProduct.ejs', { 
        title: 'Prove 04', 
        path: '/p04-addProduct', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.get('/removeProduct',(req, res, next) => {
    res.render('pages/p04-removeProduct.ejs', { 
        title: 'Prove 04', 
        path: '/p04-removeProduct', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/added', controller.addProduct);//(req, res, next) => {
    
    // console.log(req.body);
    // res.redirect('/p04');
    // res.render('/', { 
    //     title: 'Prove 04', 
    //     path: '/', // For pug, EJS 
    //     activeTA03: true, // For HBS
    //     contentCSS: true, // For HBS
// });

router.post('/removed', controller.deleteProduct);

module.exports = router;