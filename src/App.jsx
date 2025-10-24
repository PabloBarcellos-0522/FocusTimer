import { useState, useEffect, useRef } from "react"
import Button from "./components/Button.jsx"
import TaskManager from "./components/TaskManager.jsx"
import Timer from "./components/Timer.jsx"
import SettingsFrame from "./components/SettingsFrame.jsx"
import logo from "../public/FocusTimer Logo.png"

import DingSong from "../src/assets/AlarmSounds/Ding.mp3"
import MinimalSong from "../src/assets/AlarmSounds/Minimal.mp3"
import ModernSong from "../src/assets/AlarmSounds/Modern.mp3"
import NotificationSong from "../src/assets/AlarmSounds/Notification.mp3"

import TickingFast from "../src/assets/TickingSounds/clock-ticking-fast.mp3"
import TickingSlow from "../src/assets/TickingSounds/ticking-clock_1.mp3"
import BlackNoise from "../src/assets/TickingSounds/Black-Noise.mp3"
import WhiteNoise from "../src/assets/TickingSounds/white-noise.mp3"

function App() {
    const [currentTheme, switchTheme] = useState("pomodoro")
    const [timeRunning, setTimeRunning] = useState(false)
    const [ThemeSequence, setPomodorus] = useState(1)
    const [isSettingsOpen, setSettingsOpen] = useState(false)

    const [timePomo, setPomo] = useState(25)
    const [timeShort, setShort] = useState(5)
    const [timeLong, setLong] = useState(15)

    const [breakToggle, setBreak] = useState(false)
    const [autoStartPomo, setautoStartPomo] = useState(true)
    const [autoStartToggleVideo, setautoStartVideo] = useState(false)
    const [autoPauseToggleVideo, setautoPauseVideo] = useState(false)

    const [volume, setVolume] = useState(50)
    const [volume2, setVolume2] = useState(50)

    const [alarmSound, setAlarmSound] = useState("Ding")
    const [tickingSound, setTickingSound] = useState("Ticking Fast")

    const playerRef = useRef(null)

    const settingsValues = {
        timePomo,
        timeShort,
        timeLong,
        breakToggle,
        autoStartPomo,
        autoStartToggleVideo,
        autoPauseToggleVideo,
        volume,
        volume2,
        alarmSound,
        tickingSound,
    }
    const settingsSetters = {
        setPomo,
        setShort,
        setLong,
        setBreak,
        setautoStartPomo,
        setautoStartVideo,
        setautoPauseVideo,
        setVolume,
        setVolume2,
        setAlarmSound,
        setTickingSound,
    }

    const Ding = new Audio(DingSong)
    const Minimal = new Audio(MinimalSong)
    const Modern = new Audio(ModernSong)
    const Notification = new Audio(NotificationSong)
    const TickingF = new Audio(TickingFast)
    const TickingS = new Audio(TickingSlow)
    const BNoise = new Audio(BlackNoise)
    const WNoise = new Audio(WhiteNoise)

    const availableAlarmSounds = {
        Ding: Ding,
        Minimal: Minimal,
        Modern: Modern,
        Notification: Notification,
    }

    const availableTickingSounds = {
        "Ticking Fast": TickingF,
        "Ticking Slow": TickingS,
        "Black Noise": BNoise,
        "White Noise": WNoise,
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

    useEffect(() => {
        const initializePlayer = () => {
            playerRef.current = new window.YT.Player("youtube-player", {})
        }

        if (!window.YT) {
            const tag = document.createElement("script")
            tag.src = "https://www.youtube.com/iframe_api"
            const firstScriptTag = document.getElementsByTagName("script")[0]
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
            window.onYouTubeIframeAPIReady = initializePlayer
        } else {
            initializePlayer()
        }

        return () => {
            window.onYouTubeIframeAPIReady = null
        }
    }, [])

    useEffect(() => {
        const player = playerRef.current

        if (!player || typeof player.playVideo !== "function") {
            return
        }

        if (timeRunning && autoStartToggleVideo) {
            player.playVideo()
        } else if (!timeRunning && autoPauseToggleVideo) {
            player.pauseVideo()
        }
    }, [timeRunning, autoStartToggleVideo, autoPauseToggleVideo])

    const toggleTheme = (theme) => {
        switchTheme(theme)
    }

    const nextTheme = () => {
        if (currentTheme === "pomodoro") {
            if (ThemeSequence >= 4) {
                // Long break
                if (!breakToggle) setTimeRunning(false)
                toggleTheme("long")
                setPomodorus(1) // Reset for next cycle
            } else {
                // Short break
                if (!breakToggle) setTimeRunning(false)
                toggleTheme("short")
                setPomodorus(ThemeSequence + 1)
            }
        } else {
            // short or long break finished
            if (!autoStartPomo) setTimeRunning(false)
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

                <Timer
                    themeSwap={nextTheme}
                    theme={currentTheme}
                    isRunning={timeRunning}
                    times={settingsValues}
                    settingsValues={settingsValues}
                    availableAlarmSounds={availableAlarmSounds}
                    availableTickingSounds={availableTickingSounds}
                />

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
                    id="youtube-player"
                    className="w-[399px] h-[225px] rounded-lg"
                    src="https://www.youtube.com/embed/jfKfPfyJRdk?enablejsapi=1"
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
                        availableAlarmSounds={availableAlarmSounds}
                        availableTickingSounds={availableTickingSounds}
                    />
                </div>
            )}
        </>
    )
}

export default App
