import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export const TaskContextProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState([]);
  const [tasks, setTasks] = useState([]);
  return (
    <TaskContext.Provider value={{ allTasks, setAllTasks, tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
