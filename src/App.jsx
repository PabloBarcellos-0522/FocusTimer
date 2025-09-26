import { useState, useEffect } from "react"
import Button from "./components/Button.jsx"
import TaskManager from "./components/TaskManager.jsx"
import Timer from "./components/Timer.jsx"
import SettingsFrame from "./components/SettingsFrame.jsx"
import logo from "../public/FocusTimer Logo.png"

function App() {
    const [currentTheme, switchTheme] = useState("pomodoro")
    const [timeRunning, setTimeRunning] = useState(false)
    const [ThemeSequence, setPomodorus] = useState(1)
    const [isSettingsOpen, setSettingsOpen] = useState(false)

    const [timePomo, setPomo] = useState(25)
    const [timeShort, setShort] = useState(5)
    const [timeLong, setLong] = useState(15)

    const [breakToggle, setBreak] = useState(false)
    const [autoStartToggle, setautoStart] = useState(true)
    const [autoStartToggleVideo, setautoStartVideo] = useState(false)
    const [autoPauseToggleVideo, setautoPauseVideo] = useState(false)

    const [volume, setVolume] = useState(50)
    const [volume2, setVolume2] = useState(50)

    const settingsValues = {
        timePomo,
        timeShort,
        timeLong,
        breakToggle,
        autoStartToggle,
        autoStartToggleVideo,
        autoPauseToggleVideo,
        volume,
        volume2,
    }
    const settingsSetters = {
        setPomo,
        setShort,
        setLong,
        setBreak,
        setautoStart,
        setautoStartVideo,
        setautoPauseVideo,
        setVolume,
        setVolume2,
    }

    useEffect(() => {
        document.documentElement.classList.remove("theme-short", "theme-long")

        if (currentTheme === "short") {
            document.documentElement.classList.add("theme-short")
        } else if (currentTheme === "long") {
            document.documentElement.classList.add("theme-long")
        }
    }, [currentTheme])

    useEffect(() => {
        if (isSettingsOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isSettingsOpen])

    const toggleTheme = (theme) => {
        switchTheme(theme)
    }

    const nextTheme = () => {
        if (ThemeSequence < 4 && currentTheme === "pomodoro") {
            setPomodorus(ThemeSequence + 1)
        } else if (currentTheme === "long") {
            toggleTheme("pomodoro")
            setPomodorus(1)
        }

        if (ThemeSequence >= 4 && currentTheme === "pomodoro") {
            return toggleTheme("long")
        }

        if (currentTheme === "pomodoro") {
            toggleTheme("short")
        } else if (currentTheme === "short") {
            toggleTheme("pomodoro")
        }
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-48 h-[60px] bg-theme-text mt-5 rounded-md flex items-center cursor-pointer">
                    <img src={logo} alt="FocusTimer Logo" />
                </div>
                <div className="flex">
                    <Button
                        onClick={() => {
                            toggleTheme("pomodoro")
                            setTimeRunning(false)
                        }}
                        isSuperButton
                        text={"Pomodoro"}
                        pressed={currentTheme === "pomodoro"}
                    />
                    <Button
                        onClick={() => {
                            toggleTheme("short")
                            setTimeRunning(false)
                        }}
                        isSuperButton
                        text={"Short"}
                        pressed={currentTheme === "short"}
                    />
                    <Button
                        onClick={() => {
                            toggleTheme("long")
                            setTimeRunning(false)
                        }}
                        isSuperButton
                        text={"Long"}
                        pressed={currentTheme === "long"}
                    />
                </div>

                <Timer themeSwap={nextTheme} theme={currentTheme} isRunning={timeRunning} />

                <Button
                    onClick={() => setTimeRunning(!timeRunning)}
                    isSuperButton
                    pressed={timeRunning}
                    text={timeRunning ? "Stop" : "Start"}
                />
            </div>

            {/* Collum 2: */}
            <div className="flex flex-col items-center">
                <Button text={"Config"} onClick={() => setSettingsOpen(true)} />
                <iframe
                    className="w-[399px] h-[225px] rounded-lg"
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

            {isSettingsOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start overflow-y-auto no-scrollbar z-10 py-14">
                    <SettingsFrame
                        onClose={() => setSettingsOpen(false)}
                        values={settingsValues}
                        setters={settingsSetters}
                    />
                </div>
            )}
        </>
    )
}

export default App
