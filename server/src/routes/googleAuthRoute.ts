import passport from "passport";
import express from "express";
import { Request, Response } from "express";

const router = express.Router();

router
  .route("/auth/google")
  .get(passport.authenticate("google", { scope: ["profile", "email"] }));

router.route("/auth/google/callback").get(
  passport.authenticate("google", {
    successRedirect:process.env.CLIENT_URL,
    failureRedirect: "api/v1/auth/google/failed",
  })
);

router.route("/auth/google/failed").get((req: Request, res: Response) => {
  res.status(401).json({
    success: false,
    message: "Google Authentication failed",
  });
});

export default router;
