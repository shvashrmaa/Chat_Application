import { timeStamp } from "console";
import mongoose, { Schema, mongo } from "mongoose";

export interface IConversation {
  members: mongoose.Schema.Types.ObjectId[];
  messagesId: mongoose.Schema.Types.ObjectId[];
}

const conversationSchema = new Schema<IConversation>(
  {
    members: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      ref: "User",
    },
    messagesId: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Message",
    },
  },
  {timestamps : true}
);

interface IConversationModel extends IConversation {}

const ConverasationModel = mongoose.model<IConversationModel>(
  "Conversation",
  conversationSchema
);

export default ConverasationModel;
