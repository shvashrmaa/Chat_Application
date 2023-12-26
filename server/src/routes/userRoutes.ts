import express from "express";
import {
  deleteUserDetails,
  getUserDetails,
  postUserDetails,
  updateUserDetails,
} from "../controller/userController";

const router = express.Router();

router.route("/user").post(postUserDetails);
router.route("/user").get(getUserDetails);
router.route("/user").patch(updateUserDetails);
router.route("/user").delete(deleteUserDetails);

export default router;
