import { useState, useEffect, useRef } from "react"

const Timer = ({
    theme,
    isRunning,
    themeSwap = () => null,
    times,
    settingsValues,
    availableAlarmSounds,
    availableTickingSounds,
}) => {
    const themeTimes = {
        pomodoro: times.timePomo >= 1 ? times.timePomo * 60 : times.timePomo * 100,
        short: times.timeShort >= 1 ? times.timeShort * 60 : times.timeShort * 100,
        long: times.timeLong >= 1 ? times.timeLong * 60 : times.timeLong * 100,
    }

    const totalTime = themeTimes[theme]
    const [timeLeft, setTimeLeft] = useState(totalTime)
    const prevThemeRef = useRef(theme)

    const radius = 85
    const circumference = 2 * Math.PI * radius
    const progress = (timeLeft / totalTime) * 100
    const offset = circumference - (progress / 100) * circumference

    useEffect(() => {
        setTimeLeft(totalTime)
    }, [theme, totalTime])

    useEffect(() => {
        if (!isRunning || timeLeft <= 0) {
            return
        }
        const intervalId = setInterval(() => {
            setTimeLeft((t) => t - 1)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [isRunning, timeLeft])

    useEffect(() => {
        const themeChanged = prevThemeRef.current !== theme
        prevThemeRef.current = theme

        const tickingSound = availableTickingSounds[settingsValues.tickingSound]
        const alarmSound = availableAlarmSounds[settingsValues.alarmSound]

        if (isRunning) {
            if (timeLeft > 0) {
                tickingSound.loop = true
                tickingSound.volume = settingsValues.volume2 / 100
                tickingSound.play()
                if (settingsValues.tickingSound === "TickingS") {
                    tickingSound.currentTime = 0
                }
            } else {
                tickingSound.pause()
                if (settingsValues.volume > 5) {
                    alarmSound.volume = settingsValues.volume / 100
                    alarmSound.play()
                }
                if (!themeChanged) {
                    setTimeout(themeSwap, 1000)
                }
            }
        } else {
            tickingSound.pause()
        }

        return () => {
            tickingSound.pause()
        }
    }, [
        isRunning,
        timeLeft,
        settingsValues,
        availableTickingSounds,
        availableAlarmSounds,
        themeSwap,
        theme,
    ])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    return (
        <div className="relative w-80 h-80 flex justify-center items-center">
            <svg className="absolute w-full h-full" viewBox="0 0 200 200">
                {/* Background Circle */}
                <circle
                    cx="100"
                    cy="100"
                    r={radius - 1}
                    className="stroke-current text-theme-text-secundary"
                    strokeWidth="10"
                    fill="white"
                />
                {/* Progress Circle */}
                <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    className="stroke-current text-theme-secundary transition-[stroke-dashoffset] duration-500 ease-linear"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform="rotate(-90 100 100)"
                />
            </svg>

            <span className="relative text-7xl font-bold text-theme-primary">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>
        </div>
    )
}

export default Timer
