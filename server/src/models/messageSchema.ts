import mongoose, { Schema } from "mongoose";

export interface IMessage {
  receiver: mongoose.Schema.Types.ObjectId;
  sender: mongoose.Schema.Types.ObjectId;
  message: string;
  conversationId: mongoose.Schema.Types.ObjectId;
}

const messageSchema = new Schema<IMessage>(
  {
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    message: { type: String, required: true },
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Conversation",
    },
  },
  {
    timestamps: true,
  }
);

interface IMessageModel extends IMessage {}

const messageModel = mongoose.model<IMessageModel>('Message' , messageSchema)

export default messageModel
