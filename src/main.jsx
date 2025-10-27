import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import "./lenis.js";

createRoot(document.getElementById("root")).render(
    <StrictMode className="flex flex-col">
        <App />
    </StrictMode>
);
