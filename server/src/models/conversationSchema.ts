import { timeStamp } from "console";
import mongoose, { Schema, mongo } from "mongoose";

interface IConversation {
  members: mongoose.Schema.Types.ObjectId[];
  messagesId: mongoose.Schema.Types.ObjectId[];
}

const conversationSchema = new Schema<IConversation>(
  {
    members: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      path: "User",
    },
    messagesId: {
      type: [mongoose.Schema.Types.ObjectId],
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
