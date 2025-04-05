import TaskCard from "../components/TaskCard";
const tasks = [
  {
    title: "Complete Portfolio",
    description:
      "Update my personal website with latest projects and blog posts.",
    dueTime: "2025-04-06 20:00",
    priority: "High",
    status: "pending",
    categories: ["Personal", "Frontend"],
    onDelete: () => console.log("Delete Portfolio Task"),
    onUpdate: () => console.log("Update Portfolio Task"),
  },
  {
    title: "Team Meeting",
    description: "Weekly sync-up with the dev team to discuss sprint progress.",
    dueTime: "2025-04-05 10:00",
    priority: "Medium",
    status: "completed",
    categories: ["Work", "Meeting"],
    onDelete: () => console.log("Delete Meeting Task"),
    onUpdate: () => console.log("Update Meeting Task"),
  },
  {
    title: "Fix Bug #231",
    description: "Resolve login page redirect issue after authentication.",
    dueTime: "2025-04-04 16:30",
    priority: "High",
    status: "pending",
    categories: ["Work", "Bug"],
    onDelete: () => console.log("Delete Bug Task"),
    onUpdate: () => console.log("Update Bug Task"),
  },
  {
    title: "Grocery Shopping",
    description: "Buy vegetables, fruits, and dairy items for the week.",
    dueTime: "2025-04-07 19:00",
    priority: "Low",
    status: "pending",
    categories: ["Personal", "Errands"],
    onDelete: () => console.log("Delete Grocery Task"),
    onUpdate: () => console.log("Update Grocery Task"),
  },
  {
    title: "Deploy Project",
    description: "Deploy the Task Manager app to Render and test endpoints.",
    dueTime: "2025-04-06 14:00",
    priority: "High",
    status: "completed",
    categories: ["Work", "DevOps"],
    onDelete: () => console.log("Delete Deploy Task"),
    onUpdate: () => console.log("Update Deploy Task"),
  },
  {
    title: "Read Book",
    description: "Read 50 pages of 'Deep Work' by Cal Newport.",
    dueTime: "2025-04-08 21:00",
    priority: "Low",
    status: "pending",
    categories: ["Personal", "Learning"],
    onDelete: () => console.log("Delete Book Task"),
    onUpdate: () => console.log("Update Book Task"),
  },
  {
    title: "Write Blog",
    description: "Publish blog post on Full Stack App Deployment Guide.",
    dueTime: "2025-04-09 11:00",
    priority: "Medium",
    status: "pending",
    categories: ["Work", "Content"],
    onDelete: () => console.log("Delete Blog Task"),
    onUpdate: () => console.log("Update Blog Task"),
  },
  {
    title: "Exercise",
    description: "Go for a 30-minute run and 20-minute strength training.",
    dueTime: "2025-04-05 07:30",
    priority: "Medium",
    status: "completed",
    categories: ["Health", "Fitness"],
    onDelete: () => console.log("Delete Exercise Task"),
    onUpdate: () => console.log("Update Exercise Task"),
  },
  {
    title: "Call Parents",
    description: "Weekly catch-up call with family.",
    dueTime: "2025-04-04 21:00",
    priority: "Low",
    status: "completed",
    categories: ["Personal", "Family"],
    onDelete: () => console.log("Delete Call Task"),
    onUpdate: () => console.log("Update Call Task"),
  },
  {
    title: "Code Review",
    description: "Review pull requests on GitHub for current sprint tasks.",
    dueTime: "2025-04-06 13:00",
    priority: "High",
    status: "pending",
    categories: ["Work", "Code"],
    onDelete: () => console.log("Delete Review Task"),
    onUpdate: () => console.log("Update Review Task"),
  },
];

const Home = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </section>
  );
};

export default Home;
