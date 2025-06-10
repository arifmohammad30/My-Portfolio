import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Apply dark theme to document on load
document.documentElement.classList.add("dark");
document.body.classList.add("bg-gray-900");

// Mount application
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
