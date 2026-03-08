import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FontProvider } from "./FontContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FontProvider>
    <App />
  </FontProvider>
);