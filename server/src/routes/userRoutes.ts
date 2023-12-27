import express from "express";
import authentication from "../middleware/authentication";
import {
  deleteUserDetails,
  getUserDetails,
  RegisterUserDetails,
  updateUserDetails,
  LoginUserDetails,
} from "../controller/userController";

const router = express.Router();

router.route("/user/register").post(RegisterUserDetails);
router.route("/user/login").post(LoginUserDetails);
router.route("/user").get(authentication , getUserDetails);
router.route("/user").patch(updateUserDetails);
router.route("/user").delete(deleteUserDetails);

export default router;
