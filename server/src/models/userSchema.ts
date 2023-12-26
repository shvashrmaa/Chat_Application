import mongoose, { Schema, Document } from "mongoose";

interface IUser {
  email: string;
  password: string;
  userName: string;
  avatar?: string;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    avatar: { type: String },
  },
  {
    timestamps: true,
  }
);

interface IUserModel extends IUser {}

const UserModel = mongoose.model<IUserModel>("User", userSchema);

export default UserModel;
