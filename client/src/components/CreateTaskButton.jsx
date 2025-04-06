import React, { useState } from "react";
import { PiPencilSimpleFill } from "react-icons/pi";
import useCreateTask from "../hooks/useCreateTask";
import CreateUpdateModal from "./CreateUpdateModal";

const CreateTaskButton = () => {
  const [open, setOpen] = useState(false);
  const { loading, createTask } = useCreateTask();
  // const [taskData, setTaskData] = useState({
  //   title: "",
  //   description: "",
  //   priority: "Low",
  //   status: "pending",
  //   category: "Others",
  // });

  // const handleChange = (e) => {
  //   setTaskData({ ...taskData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   createTask(taskData);

  //   setOpen(false);
  //   setTaskData({
  //     title: "",
  //     description: "",
  //     priority: "Low",
  //     status: "pending",
  //     category: "Others",
  //   });
  // };

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
        <CreateUpdateModal
          setOpen={setOpen}
          purpose={"Create"}
          modalFunction={createTask}
          priority={"Low"}
          status={"pending"}
          category={"Others"}
        />
      )}
    </>
  );
};

export default CreateTaskButton;
