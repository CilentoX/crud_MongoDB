import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

// mongoose.connect(uri);

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//     console.log(" 🍃 | Connected to MongoDB Cloud");
// });

// export default db;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.error("connection error:", error);
  }
};

export default connectDB;
