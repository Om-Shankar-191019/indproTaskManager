import React, { useState } from "react";
import { PiPencilSimpleFill } from "react-icons/pi";

const CreateTaskButton = ({ onCreate }) => {
  const [open, setOpen] = useState(false);
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    dueTime: "",
    priority: "Low",
    status: "pending",
    categories: "",
  });

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({
      ...taskData,
      categories: taskData.categories.split(",").map((c) => c.trim()),
    });
    setOpen(false);
    setTaskData({
      title: "",
      description: "",
      dueTime: "",
      priority: "Low",
      status: "pending",
      categories: "",
    });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-400 text-white shadow-lg flex items-center justify-center z-50 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <PiPencilSimpleFill size={24} />
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Create New Task</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="title"
                placeholder="Title"
                className="w-full border p-2 rounded"
                value={taskData.title}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                className="w-full border p-2 rounded"
                value={taskData.description}
                onChange={handleChange}
                required
              />
              <input
                type="datetime-local"
                name="dueTime"
                className="w-full border p-2 rounded"
                value={taskData.dueTime}
                onChange={handleChange}
                required
              />
              <select
                name="priority"
                className="w-full border p-2 rounded"
                value={taskData.priority}
                onChange={handleChange}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              <select
                name="status"
                className="w-full border p-2 rounded"
                value={taskData.status}
                onChange={handleChange}
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
              <input
                name="categories"
                placeholder="Categories (comma separated)"
                className="w-full border p-2 rounded"
                value={taskData.categories}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white p-2 rounded"
              >
                Create Task
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateTaskButton;
