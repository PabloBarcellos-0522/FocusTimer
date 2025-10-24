import { useState, useEffect, useRef } from "react"

const Timer = ({
    theme,
    isRunning,
    themeSwap = () => null,
    times,
    settingsValues,
    availableAlarmSounds,
    availableTickingSounds,
    playSound,
}) => {
    const themeTimes = {
        pomodoro:
            settingsValues.timePomo >= 1
                ? settingsValues.timePomo * 60
                : settingsValues.timePomo * 100,
        short:
            settingsValues.timeShort >= 1
                ? settingsValues.timeShort * 60
                : settingsValues.timeShort * 100,
        long:
            settingsValues.timeLong >= 1
                ? settingsValues.timeLong * 60
                : settingsValues.timeLong * 100,
    }

    const totalTime = themeTimes[theme]
    const [timeLeft, setTimeLeft] = useState(totalTime)
    const [prevState, setprevState] = useState(null)
    const prevThemeRef = useRef(theme)
    const tickingSourceRef = useRef(null)

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
        const tickingSoundName = availableTickingSounds[settingsValues.tickingSound]

        if (isRunning && timeLeft > 0 && tickingSoundName != "Ticking Slow") {
            if (!tickingSourceRef.current && settingsValues.volume2 > 5) {
                const { source } = playSound(tickingSoundName, settingsValues.volume2 / 100, true)
                tickingSourceRef.current = source
            }
        } else {
            if (tickingSourceRef.current) {
                tickingSourceRef.current.stop()
                tickingSourceRef.current = null
            }
        }

        return () => {
            if (tickingSourceRef.current) {
                tickingSourceRef.current.stop()
                tickingSourceRef.current = null
            }
        }
    }, [isRunning, settingsValues.tickingSound, playSound, settingsValues.volume2])

    useEffect(() => {
        const themeChanged = prevThemeRef.current !== theme
        prevThemeRef.current = theme

        const alarmSoundName = availableAlarmSounds[settingsValues.alarmSound]

        const tickingSoundName = availableTickingSounds[settingsValues.tickingSound]
        if (
            timeLeft > 0 &&
            isRunning &&
            settingsValues.volume2 > 5 &&
            tickingSoundName === "Ticking Slow"
        ) {
            const { source } = playSound(tickingSoundName, settingsValues.volume2 / 100, false)
            tickingSourceRef.current = source
        }

        if (prevState == false && isRunning) {
            setTimeLeft((t) => t - 1)
        }

        if (timeLeft <= 0 && isRunning) {
            if (settingsValues.volume > 5) {
                playSound(alarmSoundName, settingsValues.volume / 100, false)
            }
            if (!themeChanged) {
                setTimeout(themeSwap, 1000)
            }
        }

        setprevState(isRunning)
    }, [timeLeft, isRunning])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    return (
        <div className="relative w-80 h-80 flex justify-center items-center">
            <svg className="absolute w-full h-full" viewBox="0 0 200 200">
                <circle
                    cx="100"
                    cy="100"
                    r={radius - 1}
                    className="stroke-current text-theme-text-secundary"
                    strokeWidth="10"
                    fill="white"
                />
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
