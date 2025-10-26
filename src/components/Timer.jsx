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
    const tickingSourceRef = useRef(null)
    const targetTimeRef = useRef(null) // Ref to store the target end time

    // This effect resets the timer when the theme or total time changes.
    useEffect(() => {
        setTimeLeft(totalTime)
        targetTimeRef.current = null
    }, [theme, totalTime])

    // This is the main, accurate timer logic effect.
    useEffect(() => {
        if (!isRunning) {
            targetTimeRef.current = null // Clear target on stop
            return
        }

        // When the timer starts, we set the target end time.
        if (targetTimeRef.current === null) {
            targetTimeRef.current = Date.now() + timeLeft * 1000
        }

        const intervalId = setInterval(() => {
            const remainingTime = targetTimeRef.current - Date.now()
            if (remainingTime <= 0) {
                clearInterval(intervalId)
                targetTimeRef.current = null
                setTimeLeft(0)

                // Timer finished logic
                const alarmSoundName = availableAlarmSounds[settingsValues.alarmSound]
                if (settingsValues.volume > 5) {
                    playSound(alarmSoundName, settingsValues.volume / 100, false)
                }
                setTimeout(themeSwap, 1000)
            } else {
                setTimeLeft(Math.ceil(remainingTime / 1000))
            }
        }, 250) // Check 4 times per second for better accuracy

        return () => clearInterval(intervalId)
    }, [isRunning, theme, settingsValues.alarmSound, settingsValues.volume, playSound, themeSwap, availableAlarmSounds])

    // This effect handles the continuous ticking sounds.
    useEffect(() => {
        const tickingSoundName = availableTickingSounds[settingsValues.tickingSound]

        if (tickingSourceRef.current) {
            tickingSourceRef.current.stop()
            tickingSourceRef.current = null
        }

        if (isRunning && timeLeft > 0 && settingsValues.volume2 > 5) {
            if (tickingSoundName && tickingSoundName !== "Ticking Slow") {
                const { source } = playSound(tickingSoundName, settingsValues.volume2 / 100, true)
                tickingSourceRef.current = source
            }
        }

        return () => {
            if (tickingSourceRef.current) {
                tickingSourceRef.current.stop()
                tickingSourceRef.current = null
            }
        }
    }, [isRunning, settingsValues.tickingSound, playSound, settingsValues.volume2, availableTickingSounds, theme])

    // This separate effect handles the once-per-second "Ticking Slow" sound.
    useEffect(() => {
        const tickingSoundName = availableTickingSounds[settingsValues.tickingSound]
        if (isRunning && timeLeft > 0 && settingsValues.volume2 > 5 && tickingSoundName === "Ticking Slow") {
            playSound(tickingSoundName, settingsValues.volume2 / 100, false)
        }
    }, [timeLeft]) // Relies on timeLeft changing every second

    const radius = 85
    const circumference = 2 * Math.PI * radius
    const progress = totalTime > 0 ? (timeLeft / totalTime) * 100 : 0
    const offset = circumference - (progress / 100) * circumference

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