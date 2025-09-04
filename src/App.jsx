import { useState, useEffect } from "react"
import Button from "./components/button.jsx"
import Task from "./components/task.jsx"
import TaskManager from "./components/taskManager.jsx"

function App() {
    const [currentTheme, switchTheme] = useState("pomodoro")
    const [timeRunning, setTimeRunning] = useState(false)

    useEffect(() => {
        document.documentElement.classList.remove("theme-short", "theme-long")

        if (currentTheme === "short") {
            document.documentElement.classList.add("theme-short")
        } else if (currentTheme === "long") {
            document.documentElement.classList.add("theme-long")
        }
    }, [currentTheme])

    const toggleTheme = (theme) => {
        switchTheme(theme)
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <Button text={"LOGO"} size={300} />
                <div className="flex">
                    <Button
                        onClick={() => toggleTheme("pomodoro")}
                        isSuperButton
                        text={"Pomodoro"}
                        pressed={currentTheme === "pomodoro"}
                    />
                    <Button
                        onClick={() => toggleTheme("short")}
                        isSuperButton
                        text={"Short"}
                        pressed={currentTheme === "short"}
                    />
                    <Button
                        onClick={() => toggleTheme("long")}
                        isSuperButton
                        text={"Long"}
                        pressed={currentTheme === "long"}
                    />
                </div>

                <div className="w-80 h-80 flex justify-center items-center bg-white rounded-full">
                    Timer
                </div>

                <Button
                    onClick={() => setTimeRunning(!timeRunning)}
                    isSuperButton
                    pressed={timeRunning}
                    text={"Start"}
                />
            </div>

            {/* Collum 2: */}
            <div className="flex flex-col items-center">
                <Button text={"Config"} />
                <iframe
                    className="w-[399px] h-56 rounded-lg"
                    src="https://www.youtube.com/embed/jfKfPfyJRdk"
                    title="YouTube video player"
                    // frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                <div className="w-[400px] mt-4">
                    <label className="font-bold text-white">Tasks</label>
                    <hr className="border-white mt-1 border-2" />
                </div>

                <TaskManager />
            </div>
        </>
    )
}

export default App
