import express from "express";
import {
  deleteConversation,
  getConversation,
  getConversationById,
  postConversation,
} from "../controller/conversationController";

const router = express.Router();

router.route("/conversation").post(postConversation);
router.route("/conversation").get(getConversation);
router.route("/conversation/:conversationId").get(getConversationById);
router.route("/conversation/:conversationId").delete(deleteConversation);

export default router;
