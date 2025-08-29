import { useState, useEffect } from "react"
import Button from "./components/button.jsx"

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    useEffect(() => {
        if (isDarkTheme) {
            document.documentElement.classList.add("theme-long")
        } else {
            document.documentElement.classList.remove("theme-long")
        }
    }, [isDarkTheme])

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme)
    }

    return (
        <div>
            <button
                onClick={toggleTheme}
                className="m-4 p-2 bg-theme-primary text-theme-text rounded-lg"
            >
                Toggle Theme
            </button>
            <Button isSuperButton text={"Hello"} />
            <Button isTask text={"Hello"} size={400} />
        </div>
    )
}

export default App
