import ConverasationModel from "../models/conversationSchema";
import expressAsyncHandler from "express-async-handler";
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

const postConversation = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).send("Post Conversation");
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
  postConversation,
};
