import passport from "passport";
import UserModel from "../models/userSchema";
import githubAuth from "passport-github2";

const gitHubStrategy = githubAuth.Strategy;

passport.use(
  new gitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done, cb) {}
  )
);
