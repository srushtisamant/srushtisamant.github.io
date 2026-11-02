import React from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Turns animations off for visitors who ask their device to reduce motion */}
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </React.StrictMode>,
);
