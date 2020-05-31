const express = require('express');
const router = express.Router();
const controller = require('../controller/p04-controller');


// ROUTES

router.get('/', controller.getProducts);

router.get('/addProduct', controller.renderAdd);

router.get('/removeProduct', controller.renderRemove);

router.post('/added', controller.addProduct);

router.post('/removed', controller.deleteProduct);

module.exports = router;