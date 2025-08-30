import { useState, useEffect } from "react"
import Button from "./components/button.jsx"

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState("pomodoro")

    useEffect(() => {
        document.documentElement.classList.remove("theme-short", "theme-long")

        if (isDarkTheme === "short") {
            document.documentElement.classList.add("theme-short")
        } else if (isDarkTheme === "long") {
            document.documentElement.classList.add("theme-long")
        }
    }, [isDarkTheme])

    const toggleTheme = (theme) => {
        setIsDarkTheme(theme)
    }

    return (
        <>
            <div className=" flex flex-row">
                <Button
                    onClick={() => toggleTheme("pomodoro")}
                    isSuperButton
                    text={"Pomodoro"}
                    pressed={isDarkTheme === "pomodoro"}
                />
                <Button
                    onClick={() => toggleTheme("short")}
                    isSuperButton
                    text={"Short"}
                    pressed={isDarkTheme === "short"}
                />
                <Button
                    onClick={() => toggleTheme("long")}
                    isSuperButton
                    text={"Long"}
                    pressed={isDarkTheme === "long"}
                />
            </div>
            <Button isTask text={"Hello"} size={400} />
        </>
    )
}

export default App
