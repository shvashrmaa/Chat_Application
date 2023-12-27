import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
  email: string;
  password: string;
  userName: string;
  avatar?: string;
  authProvider: string;
  googleId: string;
  githubId: string;
  microsoftId: string;
  googleEmail : string
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, unique: true },
    password: { type: String },
    userName: { type: String, required: true, unique: true },
    avatar: { type: String },
    authProvider: { type: String, required: true },
    googleId: { type: String },
    githubId: { type: String },
    microsoftId: { type: String },
    googleEmail : {type : String}
  },
  {
    timestamps: true,
  }
);

interface IUserModel extends IUser, Document {}

userSchema.pre("save", async function (next):Promise<void> {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(this.password, salt);

    this.password = hashedPassword;
    return next();
  } catch (error: any) {
    return next(error);
  }
});

userSchema.methods.ComparePassword = async function(clientPassword: string):Promise<boolean>{
  try {
    const matchedPassword = await bcrypt.compare(clientPassword , this.password)
    return matchedPassword
  } catch (error) {
    return false
  }
}

const UserModel = mongoose.model<IUserModel>("User", userSchema);

export default UserModel;
