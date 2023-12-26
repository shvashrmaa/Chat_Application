import mongoose, { Connection, mongo } from "mongoose";

export async function connectToMongo(): Promise<Connection | void> {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL);

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
