import passport from "passport";
import UserModel from "../models/userSchema";
import microsoftAuth from "passport-microsoft";
import generateToken from "../middleware/token";

const microsoftStrategy = microsoftAuth.Strategy;

//  Microsoft Strategy don't work here
// Microsoft not accept personal emails :)

export const MicrosoftAuth = () => {
  passport.use(
    new microsoftStrategy(
      {
        clientID: process.env.MICROSOFT_CLIENT_ID,
        clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
        callbackURL: process.env.MICROSOFT_CALLBACK_URL,
      },

      async function (
        accessToken: any,
        refreshToken: any,
        profile: { id: any },
        done: any
      ) {
        console.log(profile);

        try {
          const existingUser = await UserModel.findOne({
            microsoftId: profile.id,
          });

          if (existingUser) {
            done(null, {
              token: generateToken(existingUser._id),
              user: existingUser,
            });
          }

          const newUser = new UserModel({});

          const savedUser = await newUser.save();

          if (savedUser) {
            done(null, {
              token: generateToken(savedUser._id),
              user: savedUser,
            });
          }
        } catch (error) {
          console.log(error);
          done(error, undefined);
        }
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
