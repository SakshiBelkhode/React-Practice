import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </ThemeProvider>
);