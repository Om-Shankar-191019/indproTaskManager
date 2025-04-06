import { useEffect } from "react";
import CreateTaskButton from "../components/CreateTaskButton";
import TaskCard from "../components/TaskCard";
import { useTaskContext } from "../context/TaskContext";
import useFetchTasks from "../hooks/useFetchTasks";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const { loading, fetchTasks } = useFetchTasks();
  const { allTasks } = useTaskContext();
  // console.log("all tasks:", allTasks);

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {loading ? (
          <LoadingSpinner />
        ) : (
          allTasks &&
          allTasks.map((task, index) => (
            <TaskCard key={`eachTask - ${index}`} task={task} />
          ))
        )}
      </div>
      <CreateTaskButton />
    </section>
  );
};

export default Home;
