const User = require('../data/user');
const bcrypt = require('bcryptjs');

exports.setCookie = (req, res, next) => {
    res.setHeader('Set-Cookie', 'style=true');

}

// For background color assignment
// exports.changeColor = (req, res, next) => {
//         res.setHeader('Set-Cookie', 'style=' + req.body.background);
//         // res.setHeader('Set-Cookie', 'counter=0');
//         if(!res.session.isLoggedIn)
//         {
//             return res.redirect('/p05-login');
//         }
//         res.redirect('/p04');
    
//         console.log(req.body);
// }

//   /p05/signUp
exports.signUp = (req, res, next) => {
    res.render('pages/p05-signup', {
        title: 'Signup',
        path: '/p05-signup',
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
}

exports.logout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/p05/p05-login');
    });
}

exports.login = (req, res, next) => {
    res. render('pages/p05-login', {
        title: 'Login',
        path: '/p05-login',
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
}

exports.postLogin = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email: email})
        .then(user => {
            if(!user){
                console.log(email);
                return res.redirect('/p05/p05-login');
            }
            bcrypt.compare(password, user.password)
            .then(result => {
                if(result){
                    req.session.isLoggedIn = true;
                    req.session.email = email;
                    return res.redirect('/p04');
                }
            })
            .catch(err => {
                console.log(err);
                res.redirect('/p05/p05-login');
            })
            
        })
        .catch(err => console.log(err));
}

//   /p05/addUser
exports.addUser = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email: email})
    .then(userDoc => {
        if(userDoc){
            return res.redirect('/p05/p05-signup');
        }
        return bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
            const user = new User({
                email: email,
                password: hashedPassword
                //cart: { items: [] }
            });
            return user.save();
        })
        .then(result => {
            req.session.isLoggedIn = true;
            req.session.email = email;
            res.redirect('/p05');
        })
    })
    .catch(err => {
        console.log(err);
    });
}