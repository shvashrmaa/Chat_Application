import express from "express";
import {
  deleteConversation,
  getConversation,
  getConversationById,
  postNewConversation,
} from "../controller/conversationController";
import authentication from "../middleware/authentication";

const router = express.Router();

router.route("/conversation/new").post(authentication, postNewConversation);
router.route("/conversation").get(getConversation);
router.route("/conversation/:conversationId").get(getConversationById);
router.route("/conversation/:conversationId").delete(deleteConversation);

export default router;
