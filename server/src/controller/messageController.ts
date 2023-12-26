import messageModel from "../models/messageSchema";
import ConverasationModel from "../models/conversationSchema";
import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";

const getMessage = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Get User Details");
});

const postMessage = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Post Conversation");
});

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

export { postMessage, getMessage, deleteMessage, updateMessage };
