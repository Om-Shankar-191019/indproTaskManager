import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import toast from "react-hot-toast";

const useUpdateTask = () => {
  const [loading, setLoading] = useState(false);
  const { setTasks, setAllTasks } = useTaskContext();

  const updateTask = async (updatedData, _id) => {
    // console.log("form updated data,: ", updatedData, _id);
    setLoading(true);
    try {
      const res = await fetch(`/api/task/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
        credentials: "include",
      });
      const data = await res.json();
      if (data.error) {
        console.log("data err: ", data.error);
        throw new Error(data.error);
      }

      //   console.log("data from updatetask: ", data);
      setAllTasks((prev) => {
        const updatedTasks = prev.map((item) =>
          item._id === data._id ? data : item
        );
        return updatedTasks;
      });
      setTasks((prev) => {
        const updatedTasks = prev.map((item) =>
          item._id === data._id ? data : item
        );
        return updatedTasks;
      });
    } catch (error) {
      toast.error(error.message);
      //   console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateTask };
};

export default useUpdateTask;
