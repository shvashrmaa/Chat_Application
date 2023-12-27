import JWT from "jsonwebtoken";
import UserModel from "../models/userSchema";
import expressAsyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";

const authentication = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction):Promise<any> => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        const decodedToken = JWT.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await UserModel.findById(decodedToken.id).select(
          "-password"
        );
        next();
      } catch (error) {
        console.log(error);
        return res.status(400).json({ Message: "Invalid Token" });
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not Authorized , Not Valid Token");
    }
  }
);

export default authentication;
