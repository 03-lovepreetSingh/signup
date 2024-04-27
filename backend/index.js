import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();
dotenv.config();
const connect = () => {
  mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to Database");
  });
};
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong !";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});
app.listen(process.env.PORT, () => {
  connect();
  console.log("Connected to Server");
});
