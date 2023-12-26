import express, { Request, Response } from "express";
import passport from "passport";

const router = express.Router();

router.route("/auth/microsoft").get(
  passport.authenticate("microsoft", {
    prompt: "select_account ",
    scope: ["profile"],
  })
);

router.route("auth/microsoft/callback").get(
  passport.authenticate("microsoft", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/api/v1/auth/microsoft/failed",
  })
);

router.route("/auth/microsoft/failed").get((req: Request, res: Response) => {
  res.status(401).json({
    success: false,
    message: "Mircosoft Auth failed",
  });
});

export default router;
