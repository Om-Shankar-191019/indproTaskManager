import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import toast from "react-hot-toast";

const useDeleteTask = () => {
  const [loading, setLoading] = useState(false);
  const { setTasks, setAllTasks } = useTaskContext();

  const deleteTask = async (_id) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/task/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (data.error) {
        // console.log("data err: ", data.error);
        throw new Error(data.error);
      }
      //   console.log("task deleted", data);
      setAllTasks((prev) => {
        const updatedTasks = prev.filter((item) => item._id !== _id);
        return updatedTasks;
      });
      setTasks((prev) => {
        const updatedTasks = prev.filter((item) => item._id !== _id);
        return updatedTasks;
      });
      toast.success("Task Deleted");
    } catch (error) {
      toast.error(error.message);
      //   console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteTask };
};

export default useDeleteTask;
