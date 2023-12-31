import express from "express";
import {
  deleteConversation,
  getConversation,
  postNewConversation,
} from "../controller/conversationController";
import authentication from "../middleware/authentication";

const router = express.Router();

router.route("/conversation/new").post(authentication, postNewConversation);
router.route("/conversations").get(authentication , getConversation);
router.route("/conversation/:conversationId").delete(deleteConversation);

export default router;
