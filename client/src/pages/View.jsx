import React, { useEffect, useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import toast from "react-hot-toast";
import useFetchFilteredTasks from "../hooks/useFetchFilteredTasks";
import LoadingSpinner from "../components/LoadingSpinner";

const categories = [
  "Work",
  "Personal",
  "Health",
  "Finance",
  "Education",
  "Shopping",
  "Chores",
  "Meetings",
  "Travel",
  "Others",
];
const priorities = ["Low", "Medium", "High"];
const statuses = ["pending", "completed"];

const View = () => {
  const { tasks, setTasks } = useTaskContext();
  const [filters, setFilters] = useState({
    status: "",
    priority: "",
    category: "",
  });
  const { loading, fetchFilteredTasks } = useFetchFilteredTasks();

  useEffect(() => {
    fetchFilteredTasks(filters);
  }, [filters]);

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value === prev[type] ? "" : value,
    }));
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 justify-start items-center">
        {/* Status Filter */}
        <div className="space-x-2">
          <span className="text-gray-600 font-semibold">Status:</span>
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => handleFilterChange("status", s)}
              className={`px-3 py-1 rounded-full text-sm border ${
                filters.status === s
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Priority Filter */}
        <div className="space-x-2">
          <span className="text-gray-600 font-semibold">Priority:</span>
          {priorities.map((p) => (
            <button
              key={p}
              onClick={() => handleFilterChange("priority", p)}
              className={`px-3 py-1 rounded-full text-sm border ${
                filters.priority === p
                  ? "bg-yellow-500 text-white border-yellow-500"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Category Dropdown */}
        <div>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        <button
          onClick={() => setFilters({ status: "", priority: "", category: "" })}
          className="ml-auto px-4 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
        >
          Clear Filters
        </button>
      </div>

      {/* Task Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <LoadingSpinner />
        ) : tasks?.length > 0 ? (
          tasks.map((task) => <TaskCard key={task._id} task={task} />)
        ) : (
          <p className="text-gray-500">No tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default View;
