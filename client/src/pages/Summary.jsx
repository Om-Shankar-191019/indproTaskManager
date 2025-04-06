import LoadingSpinner from "../components/LoadingSpinner";
import useGetSummary from "../hooks/useGetSummary";

const colors = {
  Low: "bg-green-200",
  Medium: "bg-yellow-200",
  High: "bg-red-200",
};

const Summary = () => {
  const { summary, loading } = useGetSummary();

  if (loading) return <LoadingSpinner />;
  if (!summary)
    return <p className="text-center text-gray-500">No summary available.</p>;

  const {
    totalTasks,
    completedTasks,
    pendingTasks,
    tasksByPriority,
    tasksByCategory,
  } = summary;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-medium text-gray-800 mb-6">Task Summary</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Total Tasks</h2>
          <p className="text-2xl font-bold">{totalTasks}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Pending</h2>
          <p className="text-2xl font-bold">{pendingTasks}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Completed</h2>
          <p className="text-2xl font-bold">{completedTasks}</p>
        </div>
      </div>

      {/* Tasks By Priority */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">By Priority</h3>
        <div className="flex gap-4 flex-wrap">
          {tasksByPriority.map((p) => (
            <div
              key={`priority--${p._id}`}
              className={`p-3 rounded-lg shadow ${
                colors[p._id] || "bg-gray-200"
              }`}
            >
              <h4 className="font-medium">{p._id}</h4>
              <p className="text-lg font-bold">{p.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tasks By Category */}
      <div>
        <h3 className="text-xl font-semibold mb-2">By Category</h3>
        <div className="flex gap-4 flex-wrap">
          {tasksByCategory.map((c) => (
            <div
              key={`category--${c._id}`}
              className="p-3 rounded-lg shadow bg-indigo-100"
            >
              <h4 className="font-medium">{c._id}</h4>
              <p className="text-lg font-bold">{c.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;
