import UserModel from "../models/userSchema";
import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";

const getUserDetails = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).send("Get User Details");
  }
);

const postUserDetails = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).send("Post User details");
  }
);

const deleteUserDetails = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).send("Delete User Details");
  }
);

const updateUserDetails = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).send("update User Details");
  }
);

export {
  getUserDetails,
  postUserDetails,
  deleteUserDetails,
  updateUserDetails,
};
