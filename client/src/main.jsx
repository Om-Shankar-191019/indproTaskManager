import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import TaskContextProvider from "./context/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <TaskContextProvider>
          <App />
        </TaskContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
