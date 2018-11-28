const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

//Grab user ID to store
passport.serializeUser((user,done)=>{
    done(null,user.id);
});

//Grab user by DB _id
passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user)
    });
});

passport.use(
    new GoogleStrategy({
        callbackURL: keys.absoluteURL + '/auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret: keys.google.clientSecret
    },(accessToken,refreshToken,profile,done)=>{
        //Check DB for User
        User.findOne({strategyId:profile.id}).then((currentUser)=>{
            if(currentUser){
                console.log(`User: ${currentUser} has signed in`);
                done(null,currentUser);
            }else{
                new User({
                    username: profile.displayName,
                    strategy: 'Google',
                    strategyId: profile.id,
                    thumbnail: profile._json.image.url
                }).save().then((newUser)=>{
                    console.log(`New user: (${newUser}) has been created`);
                    done(null,newUser);
                });
            }
        });
    })
);