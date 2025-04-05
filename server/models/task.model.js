import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    dueTime: Date,
    priority: { type: String, enum: ["Low", "Medium", "High"], default: "Low" },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
    category: {
      type: String,
      enum: [
        "Work",
        "Personal",
        "Health",
        "Finance",
        "Education",
        "Shopping",
        "Chores",
        "Meetings",
        "Travel",
        "Others",
      ],
      default: "Others",
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
