require('dotenv').config();
const passport = require('passport'); 

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const Dreamer = require('../models/Dreamer');

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_SECRET, 
            callbackURL: process.env.GOOGLE_CALLBACK, 
        },
        function(accessToken, refreshToken, profile, cb){
            Dreamer.Dreamer.findOne({ googleId: profile.id }, function (err, dreamer) {
                    if (err) return cb(err);
                    if (dreamer) {
                    return cb(null, dreamer);
                    } else {
                    // we have a new student via OAuth!
                    const newDreamer = new Dreamer.Dreamer({
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        googleId: profile.id,
                    });
                    newDreamer.save(function (err) {
                        if (err) return cb(err);
                        return cb(null, newDreamer);
                    });
                    }
                });
        }
    )
);

passport.serializeUser(function(dreamer, done){
    done(null, dreamer.id);
});

passport.deserializeUser(function(id, done){
    Dreamer.Dreamer.findById(id, function(err, dreamer){
        done(err, dreamer);
    })
});

