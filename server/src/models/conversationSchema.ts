import { timeStamp } from "console";
import mongoose, { Schema, mongo } from "mongoose";

interface IConversation {
  members: mongoose.Schema.Types.ObjectId[];
  messages: mongoose.Schema.Types.ObjectId[];
}

const conversationSchema = new Schema<IConversation>(
  {
    members: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      path: "User",
    },
    messages: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      path: "Message",
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
