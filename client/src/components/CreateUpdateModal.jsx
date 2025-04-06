import React, { useEffect, useState } from "react";

const CreateUpdateModal = ({
  setOpen,
  purpose,
  modalFunction,
  title,
  description,
  priority,
  status,
  category,
  _id,
}) => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    category: "",
  });

  useEffect(() => {
    setTaskData({
      title: title || "",
      description: description || "",
      priority: priority || "Low",
      status: status || "pending",
      category: category || "Others",
    });
  }, []);

  //   console.log("ta : ", taskData, _id);

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    modalFunction(taskData, _id);
    setOpen(false);
    setTaskData({
      title: "",
      description: "",
      priority: "",
      status: "",
      category: "",
    });
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm  flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-black"
          >
            ✕
          </button>
          <h2 className="text-xl font-semibold mb-4">{purpose} New Task</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="title"
              placeholder="Title"
              className="w-full border p-2 rounded"
              value={taskData.title || ""}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              className="w-full border p-2 rounded"
              value={taskData.description || ""}
              onChange={handleChange}
            />

            <select
              name="priority"
              className="w-full border p-2 rounded"
              value={taskData.priority || ""}
              onChange={handleChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <select
              name="status"
              className="w-full border p-2 rounded"
              value={taskData.status || ""}
              onChange={handleChange}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
            <select
              name="category"
              className="w-full border p-2 rounded"
              value={taskData.category || ""}
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
              {purpose} Task
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUpdateModal;
