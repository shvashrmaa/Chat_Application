import mongoose, { Connection, mongo } from "mongoose";

export async function connectToMongo(): Promise<Connection | void> {
  const MONGODBURL =
    "mongodb+srv://sharmashiva0103:sharmashiva0103@cluster0.bhgudus.mongodb.net/";
  try {
    const connection = await mongoose.connect(
      process.env.MONGODBURL || MONGODBURL
    );

    console.log("Database successfully connected");

    return connection.connection;
  } catch (error) {
    console.log(error);
  }
}

export async function disconnectMongo(): Promise<void> {
  try {
    mongoose.disconnect();
    console.log("Database disconnect successfull");
  } catch (error) {
    console.log(error);
  }
}
