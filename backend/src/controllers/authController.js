//***ImportingPackages******//
const passport = require("../config/passport");

//****TestConnecton*****//
exports.testConnection = (req, res) => {
    res.json({
        success: true,
        message: "Application Working"
    }, 200);
};

//****GoogleLoginFunction*****//
exports.googleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });


//***GetResponseAfterLogin******//
exports.googleCallback = passport.authenticate('google', { failureRedirect: '/auth/google/failure' });

//***AfterSuccessLoginRedirect******//
exports.googleCallbackSuccess = (req, res) => {
    res.redirect('http://localhost:4000/profile');
};

//*****FailedFunction*****//
exports.googleFailure = (req, res) => {
    res.send('Failed to authenticate.');
};


//***Profile******//
exports.getProfile = (req, res) => {
    if (req.isAuthenticated()) {

        const userData = { 'Name': req.user.displayName, "Email": req.user.emails[0].value, "Profile": req.user.photos[0].value, "isEmailVerfied": req.user.emails[0].verified };

        return res.json({
            success: true,
            message: "Profile Information",
            data: userData ?? []
        })

    } else {
        return res.redirect('/auth/google');
    }
};
