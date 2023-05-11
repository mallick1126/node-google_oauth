const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("./model/db");

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            // User already exists in the database
            return done(null, existingUser);
          } else {
            // Create a new user and save it to the database
            const newUser = new User({
              googleId: profile.id,
              displayName: profile.displayName,
              email: profile.emails[0].value,
            });

            newUser
              .save()
              .then((user) => {
                done(null, user);
              })
              .catch((error) => {
                done(error, null);
              });
          }
        })
        .catch((error) => {
          done(error, null);
        });
    }
  )
);
