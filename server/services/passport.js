const passport = require("passport");
const { User } = require('../models');
const { model } = require('mongoose');
const { Strategy: GoogleTokenStrategy } = require('passport-google-token');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

//const User = model('User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});


//"Hey, Passport! Listen up!"
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
  },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
        .then((existingUser) => {
            if (existingUser) {
                // we already have this record
                done(null, existingUser);
            } else {
                //we dont have, so make new record
                new User({ googleId: profile.id }).save()
                .then(user => done(null, user));
            }
        })

      
    }
  ));



  const GoogleTokenStrategyCallback = (accessToken, refreshToken, profile, done) => done(null, {
    accessToken,
    refreshToken,
    profile,
});

passport.use(new GoogleTokenStrategy({
    clientID: 'your-google-client-id',
    clientSecret: 'your-google-client-secret',
}, GoogleTokenStrategyCallback));


const authenticateGoogle = (req, res) => new Promise((resolve, reject) => {
    passport.authenticate('google-token', { session: false }, (err, data, info) => {
        if (err) reject(err);
        resolve({ data, info });
    })(req, res);
});

module.exports = { authenticateGoogle };
//connect google users to database
// mongoose.connect(keys.mongoURI);