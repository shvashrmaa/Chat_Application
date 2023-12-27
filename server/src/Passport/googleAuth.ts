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
              token: await generateToken(existingUser._id),
            });
          }

          const newUser = new UserModel({
            googleEmail: profile.emails && profile?.emails[0].value,
            userName: profile.displayName,
            avatar: profile.photos && profile.photos[0]?.value,
            authProvider: profile.provider,
            googleId: profile.id,
          });

          const savedUser = await newUser.save();

          if (savedUser) {
            return done(null, {
              token: await generateToken(savedUser._id),
            });
          }
        } catch (error: any) {
          console.error("error while GoogleOAuth" , error.message);
          return done(error, undefined);
        }
      }
    )
  );

  passport.serializeUser(function (user, done) {
    return done(null, user);
  });

  passport.deserializeUser(async function (id: any, done) {
    try {
      const user = await UserModel.findById(id);
      return done(null, user);
    } catch (error: any) {
      console.log('error while GoogleOAuth' , error.message);
      return done(error, null);
    }
  });
};
