import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./styles/index.css"

createRoot(document.getElementById("root")).render(
    <StrictMode clssName="flex flex-col">
        <App />
    </StrictMode>
)
