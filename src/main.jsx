import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {AuthProvider} from "./context/AuthContext.jsX";
import { CourseContextProvider } from "./context/CourseContext.jsx";

export const server = "https://olp-1-server.onrender.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CourseContextProvider>
        <App />
      </CourseContextProvider>
    </AuthProvider>
  </StrictMode>
);
