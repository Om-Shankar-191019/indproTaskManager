// package imports
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
// routes imports
import authRoutes from "./server/routes/auth.routes.js";
import errorHandler from "./server/middleware/errorHandler.js";
import protectRoute from "./server/middleware/protectRoute.js";
import taskRoutes from "./server/routes/task.routes.js";

const app = express();
const port = process.env.PORT || 8000;
const __dirname = path.resolve();

// middlewares
app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(
  cors({
    origin: true, // your frontend
    credentials: true, // allow sending cookies
  })
);

// routes
app.use("/api/auth", authRoutes);
app.use("/api/task", protectRoute, taskRoutes);
app.get("/api/test", protectRoute, (req, res) => {
  res.json({ msg: req.user });
});
app.use(errorHandler);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
