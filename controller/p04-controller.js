const Product = require('../data/product');

exports.addProduct = (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const description = req.body.description;
    const product = new Product({firstName: firstName, lastName: lastName, description: description});
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
        res.render('pages/p04.ejs', {
            data: products,
            title: 'Prove 4',
            path: '/p04'
        });
    })
    .catch(err => {
        console.log(err);
    });
}

exports.deleteProduct = (req, res, next) => {
    const prodId = req.body._id;
    Product.findByIdAndDelete(prodId)
        .then(() => {
            console.log('Item Removed');
            res.redirect('/p04');

        })
        .catch(err => console.log(err));
};
