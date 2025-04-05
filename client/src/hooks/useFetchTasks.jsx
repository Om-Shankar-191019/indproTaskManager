import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import toast from "react-hot-toast";

const useFetchTasks = () => {
  const [loading, setLoading] = useState(false);
  const { setTasks, setAllTasks } = useTaskContext();

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/task`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      if (data.error) {
        console.log("data err: ", data.error);
        throw new Error(data.error);
      }
      console.log(data);

      setAllTasks(data);
      setTasks(data);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, fetchTasks };
};

export default useFetchTasks;
