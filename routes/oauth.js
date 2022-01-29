const router = require('express').Router();
const passport = require('passport');

//Google OAUTH login
router.get(
    "/auth/google", 
    passport.authenticate('google', {scope: ['profile', 'email']})
);


// Google OAUGHT callback route
router.get(
    "/oauth2callback", 
    passport.authenticate('google', {
        successRedirect: '/dreamers', // re-name to dreams?
        failureRedirect: '/', 
    })
);

// Google OAUTH logout route
router.get(
    '/logout', 
    function(req, res){
        req.logout(); 
        res.redirect('/')
    }
)

module.exports = router;