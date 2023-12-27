import ConverasationModel from "../models/conversationSchema";
import expressAsyncHandler from "express-async-handler";
import UserModel from "../models/userSchema";
import { Request, Response } from "express";

const getConversation = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).send("Get User Details");
  }
);

const getConversationById = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).send("Get Conversation by id");
  }
);

const postNewConversation = expressAsyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { receiverId } = req.body;
    try {
      if (receiverId === req.user._id.toString()) {
        return res
          .status(401)
          .json({ serverMessage: "You cannot start conversation with you!!!" });
      }

      const isreciverIdexist = await UserModel.findById(receiverId);
      if (!isreciverIdexist) {
        return res
          .status(401)
          .json({ serverMessage: "reciver user not found!!!" });
      }

      const isSenderIdExist = await UserModel.findById(req.user?._id);
      if (!isSenderIdExist) {
        return res.status(200).json({ serverMessage: "User not found" });
      }

      const newConversation = new ConverasationModel({
        members: [req.user, receiverId],
      });

      const savedConversation = await newConversation.save();

      if (savedConversation) {
        await UserModel.findByIdAndUpdate(req.user._id, {
          $push: { conversations: savedConversation._id },
        });
        await UserModel.findByIdAndUpdate(receiverId, {
          $pull: { conversations: savedConversation._id },
        });
        
        return res.status(200).json({
          serverMessage: "New Conversation created",
          conversation: savedConversation,
        });
      }
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ errorMessage: error.message });
    }
  }
);

const deleteConversation = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).send("Delete User Details");
  }
);

export {
  getConversationById,
  getConversation,
  deleteConversation,
  postNewConversation,
};
