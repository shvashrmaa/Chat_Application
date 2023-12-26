import express from "express";
import {getMessage , deleteMessage , postMessage , updateMessage} from '../controller/messageController'

const router = express.Router();

router.route("/message").post(postMessage);
router.route("/message").get(getMessage);
router.route("/message/:messageId").delete(deleteMessage);
router.route("/message/:messageId").patch(updateMessage);

export default router;
