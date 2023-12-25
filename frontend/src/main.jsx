// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

// Create a root for ReactDOM to render the application
// Using createRoot for Concurrent Mode (experimental feature as of React 18)
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap the entire application with BrowserRouter for client-side routing
  <BrowserRouter>
    {/* Use SnackbarProvider to manage snackbars/toasts for notifications */}
    <SnackbarProvider>
      {/* Render the main App component */}
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);
