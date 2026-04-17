import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./util/font-awesome.js";
import ErrorBoundary from "./components/ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
