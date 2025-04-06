import React, { useState } from "react";
import { PiPencilSimpleFill } from "react-icons/pi";
import useCreateTask from "../hooks/useCreateTask";

const CreateTaskButton = () => {
  const [open, setOpen] = useState(false);
  const { loading, createTask } = useCreateTask();
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "Low",
    status: "pending",
    category: "Others",
  });

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(taskData);

    setOpen(false);
    setTaskData({
      title: "",
      description: "",
      priority: "Low",
      status: "pending",
      category: "Others",
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
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm  flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-black"
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
              />

              <select
                name="priority"
                className="w-full border p-2 rounded"
                value={taskData.priority}
                onChange={handleChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
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
              <select
                name="category"
                className="w-full border p-2 rounded"
                value={taskData.category}
                onChange={handleChange}
              >
                <option value="Others">Others</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Health">Health</option>
                <option value="Finance">Finance</option>
                <option value="Education">Education</option>
                <option value="Shopping">Shopping</option>
                <option value="Chores">Chores</option>
                <option value="Meetings">Meetings</option>
                <option value="Travel">Travel</option>
              </select>
              <button
                type="submit"
                className="w-full cursor-pointer bg-blue-600  hover:bg-blue-500 text-white p-2 rounded"
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
