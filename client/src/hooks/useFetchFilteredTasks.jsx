import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import toast from "react-hot-toast";

const useFetchFilteredTasks = () => {
  const [loading, setLoading] = useState(false);
  const { setTasks } = useTaskContext();

  const fetchFilteredTasks = async (filters) => {
    setLoading(true);
    try {
      const query = new URLSearchParams(filters);
      // console.log("query: ", query.toString());
      const res = await fetch(`/api/task?${query.toString()}`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setTasks(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, fetchFilteredTasks };
};

export default useFetchFilteredTasks;
