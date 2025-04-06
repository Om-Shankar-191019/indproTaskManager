import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import toast from "react-hot-toast";

const useCreateTask = () => {
  const [loading, setLoading] = useState(false);
  const { setTasks, setAllTasks } = useTaskContext();

  const createTask = async (taskData) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/task`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
        credentials: "include",
      });
      const data = await res.json();
      if (data.error) {
        // console.log("data err: ", data.error);
        throw new Error(data.error);
      }

      setAllTasks((prev) => [data, ...prev]);
      setTasks((prev) => [data, ...prev]);
    } catch (error) {
      toast.error(error.message);
      //   console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, createTask };
};

export default useCreateTask;
