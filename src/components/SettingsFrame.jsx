import { useEffect, useRef } from "react"
import TimeInput from "./SettingsInputs/TimeInput.jsx"
import Toggle from "./SettingsInputs/Toggle.jsx"
import SliderInput from "./SettingsInputs/SliderInput.jsx"
import SoundSelect from "./SettingsInputs/SoundSelect.jsx"
import UrlInput from "./SettingsInputs/UrlInput.jsx"

const SettingsFrame = ({
    onClose,
    values,
    setters,
    availableAlarmSounds,
    availableTickingSounds,
}) => {
    const settingsRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (settingsRef.current && !settingsRef.current.contains(event.target)) {
                onClose()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [onClose])

    const alarmSoundOptions = Object.keys(availableAlarmSounds).map((key) => ({
        value: key,
        label: key,
    }))
    const tickingSoundOptions = Object.keys(availableTickingSounds).map((key) => ({
        value: key,
        label: key,
    }))

    return (
        <div
            ref={settingsRef}
            className="w-[450px] flex flex-col items-center bg-theme-background p-5 rounded-lg shadow-lg relative"
        >
            <button
                onClick={onClose}
                className="absolute top-3 right-3 text-white hover:text-gray-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <h2 className="text-2xl font-bold text-white mb-4">Settings</h2>
            {/* Content of the settings will go here */}
            <div className="w-full">
                <hr className="border-white mt-1 border-1" />
            </div>
            <h1 className="text-theme-text text-xl w-full m-3">Timer (Minutes)</h1>
            <div className="flex gap-5">
                <TimeInput
                    label={"Pomodoro"}
                    value={values.timePomo}
                    onChange={(newValue) => setters.setPomo(newValue)}
                />

                <TimeInput
                    label={"Short Break"}
                    value={values.timeShort}
                    onChange={(newValue) => setters.setShort(newValue)}
                />

                <TimeInput
                    label={"Long Break"}
                    value={values.timeLong}
                    onChange={(newValue) => setters.setLong(newValue)}
                />
            </div>
            <br />
            <Toggle
                label={"Auto Start Breaks"}
                state={values.breakToggle}
                onChange={() => setters.setBreak(!values.breakToggle)}
            />
            <Toggle
                label={"Auto Start Pomodoros"}
                state={values.autoStartPomo}
                onChange={() => setters.setautoStartPomo(!values.autoStartPomo)}
            />
            <br />
            <div className="w-full">
                <hr className="border-white mt-1 border-1" />
            </div>
            <h1 className="text-theme-text text-xl w-full m-3">Mídia</h1>
            <br />
            <SoundSelect
                label={"Alarm Sound"}
                options={alarmSoundOptions}
                value={values.alarmSound}
                onChange={(e) => setters.setAlarmSound(e.target.value)}
            />
            <SliderInput
                value={values.volume}
                onChange={() => setters.setVolume(event.target.value)}
            />
            <SoundSelect
                label={"Ticking Sound"}
                options={tickingSoundOptions}
                value={values.tickingSound}
                onChange={(e) => setters.setTickingSound(e.target.value)}
            />
            <SliderInput
                value={values.volume2}
                onChange={() => setters.setVolume2(event.target.value)}
            />

            <UrlInput
                label={"URL"}
                videoUrl={values.videoUrl}
                onChange={(newUrl) => setters.setVideoUrl(newUrl)}
            />

            <Toggle
                label={"Auto start vídeo"}
                state={values.autoStartToggleVideo}
                onChange={() => setters.setautoStartVideo(!values.autoStartToggleVideo)}
            />
            <Toggle
                label={"Auto pause vídeo"}
                state={values.autoPauseToggleVideo}
                onChange={() => setters.setautoPauseVideo(!values.autoPauseToggleVideo)}
            />
        </div>
    )
}

export default SettingsFrame
