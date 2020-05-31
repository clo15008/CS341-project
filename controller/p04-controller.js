const Product = require('../data/product');

exports.renderAdd = (req, res, next) => {
    res.render('pages/p04-addProduct.ejs', { 
        title: 'Add Item', 
        path: '/p04-addProduct', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    })
}

exports.renderRemove = (req, res, next) => {
    Product.find({email: req.session.email})
    .then(products => {
        if(!req.session.isLoggedIn){
            res.redirect('/p05/p05-login');
        }
        res.render('pages/p04-removeProduct.ejs', { 
            title: 'Remove Item', 
            data: products,
            path: '/p04-removeProduct', // For pug, EJS 
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
        });
    })
    .catch(err => {
        console.log(err);
    });
}

exports.addProduct = (req, res, next) => {
    if(!req.session.isLoggedIn){
        res.redirect('/p05/p05-login');
    }
    // console.log(req.session.email);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const description = req.body.description;
    const email = req.session.email;
    const product = new Product({firstName: firstName, lastName: lastName, description: description, email: email});
    product
        .save()
        .then(result => {
            console.log('Product added');
            res.redirect('/p04');
       })
       .catch(err => {
           console.log(err);
       })
}

exports.getProducts = (req, res, next) => {
    Product.find()
    .then(products => {
        console.log(products);
        if(!req.session.isLoggedIn){
            res.redirect('/p05/p05-login');
        }
        res.render('pages/p04.ejs', {
            data: products,
            title: 'Items',
            path: '/p04'
        });
    })
    .catch(err => {
        console.log(err);
    });
}

exports.deleteProduct = (req, res, next) => {
    if(!req.session.isLoggedIn){
        res.redirect('/p04');
    }
    const prodId = req.body._id;
    Product.findByIdAndDelete(prodId)
        .then(() => {
            console.log('Item Removed');
            res.redirect('/p04');

        })
        .catch(err => console.log(err));
};
