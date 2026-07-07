import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";

import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";


;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
    <App />
  </React.StrictMode>
);