import GoogleOAuth from "passport-google-oauth20";
import passport from "passport";
import UserModel from "../models/userSchema";

const googleStrategy = GoogleOAuth.Strategy;

passport.use(
  new googleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },

    function (accessToken, refreshToken, profile, cb) {}
  )
);
