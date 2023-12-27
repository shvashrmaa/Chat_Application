import passport from "passport";
import UserModel from "../models/userSchema";
import githubAuth from "passport-github2";
import generateToken from "../middleware/token";

const gitHubStrategy = githubAuth.Strategy;

export const gitHubAuth = () => {
  passport.use(
    new gitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL,
      },
      async function (
        accessToken: any,
        refreshToken: any,
        profile: any,
        done: any
      ) {
        try {
          const existingUser = await UserModel.findOne({
            githubId: profile.id,
          });

          if (existingUser) {
            done(null, {
              token: generateToken(existingUser._id),
              user: existingUser,
            });
          }

          const newUser = new UserModel({
            authProvider: profile.provider,
            userName: profile.username,
            githubId: profile.id,
            avatar: profile.photos[0].value,
          });

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
