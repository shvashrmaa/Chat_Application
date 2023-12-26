import mongoose, { Schema } from "mongoose";

interface IMessage {
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
      path: "User",
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      path: "User",
    },
    message: { type: String, required: true },
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      path: "Conversation",
    },
  },
  {
    timestamps: true,
  }
);

interface IMessageModel extends IMessage {}

const messageModel = mongoose.model<IMessageModel>('Message' , messageSchema)

export default messageModel
