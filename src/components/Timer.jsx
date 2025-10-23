import { useState, useEffect } from "react"

const Timer = ({ theme, isRunning, themeSwap = () => null, times }) => {
    const themeTimes = {
        pomodoro: times.timePomo >= 1 ? times.timePomo * 60 : times.timePomo * 100,
        short: times.timeShort >= 1 ? times.timeShort * 60 : times.timeShort * 100,
        long: times.timeLong >= 1 ? times.timeLong * 60 : times.timeLong * 100,
    }

    const totalTime = themeTimes[theme]
    const [timeLeft, setTimeLeft] = useState(totalTime)
    const [previusRunning, setpreviusRunning] = useState(false)

    // SVG Circle properties
    const radius = 85
    const circumference = 2 * Math.PI * radius
    const progress = (timeLeft / totalTime) * 100
    const offset = circumference - (progress / 100) * circumference

    // Reset timer when theme changes
    useEffect(() => {
        setTimeLeft(totalTime)
    }, [theme, totalTime])

    // Countdown logic
    useEffect(() => {
        if (isRunning && timeLeft <= 0) {
            setTimeout(themeSwap, 1000)
            return
        }

        if (!isRunning) {
            setpreviusRunning(isRunning)
            return
        }

        if (previusRunning == false && isRunning == true) {
            setTimeLeft((prevTime) => prevTime - 1)
        }

        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1)
        }, 1000)

        setpreviusRunning(isRunning)
        return () => clearInterval(intervalId)
    }, [isRunning, timeLeft])

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
