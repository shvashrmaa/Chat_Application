import UserModel from "../models/userSchema";
import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import generateToken from "../middleware/token";

const getUserDetails = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).send("Get User Details");
  }
);

const RegisterUserDetails = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { email, password, userName, avatar } = req.body;
    try {
      const existingUser = await UserModel.findOne({ email: email });
      if (existingUser) {
        return res
          .status(401)
          .json({ serverMessage: "Email already exist try another" });
      }

      const existingUserName = await UserModel.findOne({ userName: userName });
      if (existingUserName) {
        return res.status(401).json({
          serverMessage: "UserName already exist. Try another UserName",
        });
      }

      const newUser = new UserModel({
        email: email,
        password: password,
        userName: userName,
        avatar: avatar,
        authProvider: "Email_Password",
      });

      const savedUser = await newUser.save();
      if (savedUser) {
        return res.status(200).send("User successfully created");
      }
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ errorMessage: error.message });
    }
  }
);

const LoginUserDetails = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email: email });

  if (user && (await user.comparePassword(password))) {
    res.status(200).json({
      token: generateToken(user._id),
      serverMessage: "Successfully Logged In",
    });
  } else {
    res
      .status(401)
      .json({ serverMessage: "email or password is incorrect. Try again!!" });
  }
});

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
  RegisterUserDetails,
  deleteUserDetails,
  updateUserDetails,
  LoginUserDetails,
};
