import { createContext, useContext } from "react";

const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export const TaskContextProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState(null);
  const [tasks, setTasks] = useState(null);
  return (
    <TaskContext.Provider value={{ allTasks, setAllTasks, tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
