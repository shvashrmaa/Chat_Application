import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { createServer } from "http";
import { connectToMongo } from "./database/database";
import UserRoutes from "./routes/userRoutes";
import ConversationRoutes from "./routes/conversationRoute";
import MessageRoutes from "./routes/messageRoute";

// ******************* Server Implementation *************************
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// ************************** Middlewares ***************************
app.use(cors());
dotenv.config();

// ******************** MongoDb Database Connection ************
connectToMongo();

// *************************** Server Routes ********************
app.get("/", (req: any, res: any) => {
  res.status(200).send("ChatApp server is running");
});

app.use("/api/v1", UserRoutes);
app.use("/api/v1", ConversationRoutes);
app.use("/api/v1", MessageRoutes);

// ******************** Server Listening on PORT 5000 *****************************
server.listen(process.env.PORT, () => {
  console.log(
    `Server is running at http://localhost:${process.env.PORT}`
  );
});

// ********************* Socket implementation *********************
io.on("connection", (socket: any) => {
  console.log("User Connected");

  socket.on("disconnect", () => {
    console.log("User Disconnect ");
  });
});
