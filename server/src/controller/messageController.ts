import messageModel from "../models/messageSchema";
import ConverasationModel from "../models/conversationSchema";
import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import UserModel from "../models/userSchema";

const getMessage = expressAsyncHandler(async (req: Request, res: Response):Promise<any> => {
  try {
    const {conversationId} = req.params

    const isConversationExist = await ConverasationModel.findById(conversationId)

    if(isConversationExist) {
      const messages = await messageModel.find({conversationId : conversationId})
      return res.status(200).json(messages)
    }

    return res.status(404).json({serverMessage : "Conversation not found"})
  } catch (error: any) {
    console.log(error)
    return res.status(500).json({errorMessage : error.message})
  }
});

const postNewMessage = expressAsyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { receiver, message, conversationId } = req.body;
    try {
      const isConversationIdExist = await ConverasationModel.findById(
        conversationId
      );
      if (!isConversationIdExist) {
        return res
          .status(401)
          .json({ serverMessage: "conversation not found" });
      }
      const isReceiverIdExist = await UserModel.findById(receiver);
      if (!isReceiverIdExist) {
        return res.status(401).json({ serverMessage: "reciver not found" });
      }

      const newMessage = new messageModel({
        sender: req.user._id,
        receiver: receiver,
        conversationId: conversationId,
        message: message,
      });

      const savedMessage = await newMessage.save();

      if (savedMessage) {
        await ConverasationModel.findByIdAndUpdate(conversationId, {
          $push: { messagesId: savedMessage._id },
        });
        return res.status(200).json({
          serverMessage: "Message successfully created",
          message: savedMessage,
        });
      }
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ errorMessage: error.message });
    }
  }
);

const updateMessage = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).send("Update Message");
  }
);

const deleteMessage = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).send("Delete User Details");
  }
);

export { postNewMessage, getMessage, deleteMessage, updateMessage };
