import express from "express";
import {getMessage , deleteMessage , postNewMessage , updateMessage} from '../controller/messageController'
import authentication from "../middleware/authentication";

const router = express.Router();

router.route("/message/new").post(authentication , postNewMessage);
router.route("/messages/:conversationId").get(authentication,getMessage);
router.route("/message/:messageId").delete(deleteMessage);
router.route("/message/:messageId").patch(updateMessage);

export default router;
