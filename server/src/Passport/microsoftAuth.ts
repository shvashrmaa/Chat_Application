import passport from "passport";
import UserModel from "../models/userSchema";
import microsoftAuth from "passport-microsoft";

const microsoftStrategy = microsoftAuth.Strategy;

passport.use(
  new microsoftStrategy(
    {
      clientID: process.env.MICROSOFT_CLIENT_ID,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
      callbackURL: process.env.MICROSOFT_CALLBACK_URL,
      scope: ["user.read"],
    },

    function (accessToken, refreshToken, profile, done, cb) {
      console.log(profile);
    }
  )
);
