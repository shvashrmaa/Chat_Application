import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { createServer } from "http";
import { connectToMongo } from "./database/database";
import UserRoutes from "./routes/userRoutes";
import ConversationRoutes from "./routes/conversationRoute";
import MessageRoutes from "./routes/messageRoute";
import GoogleAuthRoutes from "./routes/googleAuthRoute";
import GitHubAuthRoutes from "./routes/gitHubAuthRoute";
import MicrosoftAuthRoutes from "./routes/microsoftAuthRoute";
import { googleAuth } from "./Passport/googleAuth";
import { gitHubAuth } from "./Passport/gitHubAuth";
import { MicrosoftAuth } from "./Passport/microsoftAuth";
import passport from "passport";
import cookieSession from "cookie-session";
import session from "express-session";

dotenv.config();
// ******************* Server Implementation *************************
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE"],
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

connectToMongo();

app.get("/", (req: any, res: any) => {
  res.status(200).send("ChatApp server is running");
});

app.use("/api/v1", UserRoutes);
app.use("/api/v1", ConversationRoutes);
app.use("/api/v1", MessageRoutes);
app.use("/api/v1", GoogleAuthRoutes);
app.use("/api/v1", MicrosoftAuthRoutes);
app.use("/api/v1", GitHubAuthRoutes);

googleAuth();
gitHubAuth();

server.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});

// ********************* Socket implementation *********************
io.on("connection", (socket: any) => {
  console.log("User Connected");

  socket.on("disconnect", () => {
    console.log("User Disconnect ");
  });
});
