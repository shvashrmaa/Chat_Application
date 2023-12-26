import passport from "passport";
import UserModel from "../models/userSchema";
import microsoftAuth from "passport-microsoft";

const microsoftStrategy = microsoftAuth.Strategy;

export const MicrosoftAuth = () => {
  passport.use(
    new microsoftStrategy(
      {
        clientID: process.env.MICROSOFT_CLIENT_ID,
        clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
        callbackURL: process.env.MICROSOFT_CALLBACK_URL,
      },

      function (accessToken: any, refreshToken: any, profile: any, done: any) {
        console.log(profile);
        done(null, profile);
      }
    )
  );

  passport.serializeUser(function (user: any, done) {
    return done(null, user);
  });

  passport.deserializeUser(function (id: any, done) {
    return done(null, id);
  });
};
