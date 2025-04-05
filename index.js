// package imports
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import cookieParser from "cookie-parser";
import cors from "cors";
// routes imports
import authRoutes from "./server/routes/auth.routes.js";
import errorHandler from "./server/middleware/errorHandler.js";
import protectRoute from "./server/middleware/protectRoute.js";

const app = express();
const port = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(cookieParser());
// app.use(cors());
const corsOptions = {
  origin: "http://localhost:5173", // Replace this with your frontend domain
  credentials: true, // Enable sending cookies from the frontend
};

app.use(cors(corsOptions));

// routes
app.use("/api/auth", authRoutes);
app.get("/api/test", protectRoute, (req, res) => {
  res.json({ msg: req.user });
});
app.use(errorHandler);

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
