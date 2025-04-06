import express from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  getTaskSummary,
} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/summary", getTaskSummary);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
