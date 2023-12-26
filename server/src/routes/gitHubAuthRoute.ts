import passport, { authenticate } from "passport";
import express, { Request, Response } from "express";

const router = express.Router();

router
  .route("/auth/github")
  .get(passport.authenticate("github", { scope: ["profile"] }));

router.route("auth/github/callback").get(
  passport.authenticate("github", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "api/v1/auth/github/failed",
  })
);

router.route("/auth/github/failed").get((req: Request, res: Response) => {
  res.status(401).json({
    success: false,
    message: "Github Auth Failed",
  });
});

export default router;
