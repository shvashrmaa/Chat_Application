import passport from "passport";
import UserModel from "../models/userSchema";
import githubAuth from "passport-github2";

const gitHubStrategy = githubAuth.Strategy;

export const gitHubAuth = () => {
  passport.use(
    new gitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL,
      },
      function (accessToken:any, refreshToken:any, profile:any, done:any) {
        console.log(profile);
        done(null , profile)
      }
    )
  );

  passport.serializeUser(function (user: any, done) {
    return done(null, user);
  });

  passport.deserializeUser(function (id: any, done) {
    return done(null, id);
  });
}

