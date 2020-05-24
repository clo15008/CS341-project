const User = require('../data/user');

exports.setCookie = (req, res, next) => {
    res.setHeader('Set-Cookie', 'style=true');

}

exports.changeColor = (req, res, next) => {
        res.setHeader('Set-Cookie', 'style=' + req.body.background);
        // res.setHeader('Set-Cookie', 'counter=0');
        res.redirect('/p05');
    
        console.log(req.body);
}

//   /p05/signUp
exports.signUp = (req, res, next) => {
    res.render('pages/p05-signup', { 
        title: 'Prove 05', 
        path: '/p05-signup', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
}

//   /p05/addUser
exports.addUser = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email: email})
    .then(userDoc => {
        if(userDoc){
            return res.redirect('/p05/p05-signup');
            //alert("email taken");
            //redirection message
        }
        const user = new User({
            email: email,
            password: password
            //cart: { items: [] }
        });
        return user.save();

    })
    .then(result => {
        res.redirect('/');
    })
    .catch(err => {
        console.log(err);
    });
    //const confirmPassword = req.body.confirmPassword;

}

//   /p05/authenticate





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