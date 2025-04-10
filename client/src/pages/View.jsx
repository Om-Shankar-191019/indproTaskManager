import React, { useEffect, useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import toast from "react-hot-toast";
import useFetchFilteredTasks from "../hooks/useFetchFilteredTasks";
import LoadingSpinner from "../components/LoadingSpinner";
import useDebounce from "../hooks/useDebounce";

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
    title: "",
  });

  const [searchTitle, setSearchTitle] = useState("");
  const debouncedTitle = useDebounce(searchTitle, 500);
  const { loading, fetchFilteredTasks } = useFetchFilteredTasks();

  useEffect(() => {
    fetchFilteredTasks({ ...filters, title: debouncedTitle });
  }, [filters, debouncedTitle]);

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
        {/* search bar */}
        <div className="mb-6 mt-2 flex justify-between items-center flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search by title..."
            className="border border-gray-300 bg-white rounded px-4 py-2 w-full sm:w-72 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
        {/* Status Filter */}
        <div className="space-x-2">
          <span className="text-gray-600 font-semibold">Status:</span>
          {statuses.map((s, index) => (
            <button
              key={`status-${s}-${index}`}
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
          {priorities.map((p, index) => (
            <button
              key={`prior-${p}-${index}`}
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
            {categories.map((c, index) => (
              <option key={`cat-${c}-${index}`} value={c}>
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
          tasks.map((task, index) => (
            <TaskCard key={`tas-${task._id}-${index}`} task={task} />
          ))
        ) : (
          <p className="text-gray-500">No tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default View;
