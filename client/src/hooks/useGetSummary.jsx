import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useGetSummary = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await fetch("/api/task/summary", {
          credentials: "include",
        });
        const data = await res.json();
        setSummary(data);
      } catch (error) {
        toast.error("Failed to load summary");
        // console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  return { summary, loading };
};

export default useGetSummary;
