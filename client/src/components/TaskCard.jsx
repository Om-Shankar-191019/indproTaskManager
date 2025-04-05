import { FaTrash, FaEdit, FaCheckCircle, FaClock } from "react-icons/fa";

const TaskCard = ({ task }) => {
  const {
    title,
    description,
    dueTime,
    priority,
    status,
    categories,
    onDelete,
    onUpdate,
  } = task;

  const priorityColor = {
    low: "bg-green-100 text-green-700",
    medium: "bg-yellow-100 text-yellow-700",
    high: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 w-full max-w-md mx-auto mb-4 transition-all hover:shadow-xl">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Bottom Info Row */}
      <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
        {/* Due Time */}
        <div className="flex items-center text-sm text-gray-500">
          <FaClock className="mr-1" />
          <span>{dueTime}</span>
        </div>

        {/* Priority */}
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            priorityColor[priority.toLowerCase()]
          }`}
        >
          {priority}
        </span>

        {/* Icons */}
        <div className="flex items-center gap-3 text-gray-500">
          <FaEdit
            className="cursor-pointer hover:text-blue-500"
            onClick={onUpdate}
          />
          <FaTrash
            className="cursor-pointer hover:text-red-500"
            onClick={onDelete}
          />
        </div>
      </div>

      {/* Status + Categories */}
      <div className="flex justify-between items-center flex-wrap gap-2">
        {/* Status */}
        <div className="flex items-center text-sm font-medium">
          {status === "completed" ? (
            <FaCheckCircle className="text-green-500 mr-1" />
          ) : (
            <FaClock className="text-yellow-500 mr-1" />
          )}
          {status}
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap gap-1">
          {categories.map((cat, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
