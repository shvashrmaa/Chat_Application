import mongoose, { Schema, Document } from "mongoose";

interface IUser {
  email: string;
  password: string;
  userName: string;
  avatar?: string;
  authProvider: string;
  googleId : string,
  githubId : string,
  microsoftId : string
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, unique: true },
    password: { type: String },
    userName: { type: String, required: true, unique: true },
    avatar: { type: String },
    authProvider: { type: String, required: true },
    googleId : {type : String},
    githubId : {type : String},
    microsoftId : {type : String}
  },
  {
    timestamps: true,
  }
);

interface IUserModel extends IUser {}

const UserModel = mongoose.model<IUserModel>("User", userSchema);

export default UserModel;
