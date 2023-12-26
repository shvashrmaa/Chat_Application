import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import UserModel from "../models/userSchema";

export const googleAuth = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },

      function (accessToken, refreshToken, profile, done) {
        done(null , profile)
        console.log(profile)
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
