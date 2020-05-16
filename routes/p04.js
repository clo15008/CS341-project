const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/p04.ejs', { 
        title: 'Prove 04', 
        path: '/p04', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

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

router.post('/added', (req, res, next) => {
    
    console.log(req.body);
    res.redirect('/p04');
    // res.render('/', { 
    //     title: 'Prove 04', 
    //     path: '/', // For pug, EJS 
    //     activeTA03: true, // For HBS
    //     contentCSS: true, // For HBS
});

module.exports = router;