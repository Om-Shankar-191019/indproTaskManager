import Task from "../models/task.model.js";

// Create a task
export const createTask = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      priority: req.body.priority,
      category: req.body.category,
      user: userId,
    });
    const saved = await newTask.save();
    res.status(201).json(saved);
  } catch (error) {
    next(error);
  }
};

// Get all tasks
export const getTasks = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { status, category, priority, title } = req.query;
    const query = { user: userId };

    if (status) query.status = status;
    if (category) query.category = category;
    if (priority) query.priority = priority;
    if (title) {
      query.title = { $regex: title, $options: "i" }; // case-insensitive search
    }

    const tasks = await Task.find(query).sort({ updatedAt: -1 });

    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

// Get single task
export const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

// Update task
export const updateTask = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const updated = await Task.findByIdAndUpdate(
      { _id: req.params.id, user: userId },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

// Delete task
export const deleteTask = async (req, res, next) => {
  try {
    const userId = req.user._id;
    await Task.findByIdAndDelete({ _id: req.params.id, user: userId });
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    next(error);
  }
};
