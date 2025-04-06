import mongoose from "mongoose";
import dotenv from "dotenv";
import Task from "./server/models/task.model.js";
import { dummyTasks } from "./server/utils/dummyData.js";

dotenv.config();

const MONGODB_URI = process.env.MONGO_URI;
const userId = "67f2670063c8e853c886301b"; // Replace with a valid ObjectId string from User collection

const seedTasks = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to DB");

    // Assign userId to all tasks
    const tasksWithUser = dummyTasks.map((task) => ({
      ...task,
      user: userId,
    }));

    await Task.insertMany(tasksWithUser);
    console.log("30 Student tasks inserted successfully");

    await mongoose.disconnect();
  } catch (err) {
    console.error("Error inserting tasks:", err.message);
  }
};

seedTasks();
