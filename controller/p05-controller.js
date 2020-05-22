exports.setCookie = (req, res, next) => {
    res.setHeader('Set-Cookie', 'style=true');

}

exports.changeColor = (req, res, next) => {
        res.setHeader('Set-Cookie', 'style=' + req.body.background);
        // res.setHeader('Set-Cookie', 'counter=0');
        res.redirect('/p05');
    
        console.log(req.body);
}

// exports.getProducts = (req, res, next) => {
//     Product.find()
//     .then(products => {
//         console.log(products);
//         res.render('pages/p04.ejs', {
//             data: products,
//             title: 'Prove 4',
//             path: '/p04'
//         });
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }