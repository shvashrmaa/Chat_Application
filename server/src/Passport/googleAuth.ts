import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import UserModel from "../models/userSchema";
import generateToken from "../middleware/token";

export const googleAuth = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },

      async function (accessToken, refreshToken, profile, done) {
        try {
          const existingUser = await UserModel.findOne({
            googleId: profile.id,
          });

          if (existingUser) {
            return done(null, {
              token: generateToken(existingUser._id),
              user: existingUser,
            });
          }

          const newUser = new UserModel({
            email: profile?.emails[0].value,
            userName: profile.displayName,
            avatar: profile.photos[0]?.value,
            authProvider: profile.provider,
            googleId: profile.id,
          });

          const savedUser = await newUser.save();

          if (savedUser) {
            done(null, {
              token: generateToken(savedUser._id),
              user: savedUser,
            });
          }
        } catch (error: any) {
          console.error(error);
          return done(error, undefined);
        }
      }
    )
  );

  passport.serializeUser(function (user: any, done) {
    return done(null, user.userId);
  });

  passport.deserializeUser(async function (id: any, done) {
    try {
      const user = await UserModel.findById(id);
      return done(null, user);
    } catch (error) {
      console.log(error);
      done(error, null);
    }
  });
};
