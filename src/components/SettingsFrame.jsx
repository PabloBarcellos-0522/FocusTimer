import TimeInput from "./SettingsInputs/TimeInput.jsx"
import Toggle from "./SettingsInputs/Toggle.jsx"
import SliderInput from "./SettingsInputs/SliderInput.jsx"
import SoundSelect from "./SettingsInputs/SoundSelect.jsx"

const SettingsFrame = ({ onClose, values, setters }) => {
    const handleVolumeChange = (event) => {
        setters.setVolume(event.target.value)
    }

    const availableSounds = [
        { value: "src/assets/ButtonClick.mp3", label: "Som A" },
        { value: "path/to/sound2.mp3", label: "Som B" },
        { value: "path/to/sound3.mp3", label: "Som C" },
    ]

    return (
        <div className="w-[450px] flex flex-col items-center bg-theme-background p-5 rounded-lg shadow-lg relative overflow-auto max-h-[90%] no-scrollbar">
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
                state={values.autoStartToggle}
                onChange={() => setters.setautoStart(!values.autoStartToggle)}
            />

            <br />
            <div className="w-full">
                <hr className="border-white mt-1 border-1" />
            </div>
            <h1 className="text-theme-text text-xl w-full m-3">Mídia</h1>

            <br />
            <SoundSelect options={availableSounds} label={"Alarm Sound"} />
            <SliderInput value={values.volume} onChange={handleVolumeChange} />
            <SoundSelect options={availableSounds} label={"Ticking Sound"} />
            <SliderInput value={values.volume} onChange={handleVolumeChange} />

            <Toggle
                label={"Auto start vídeo"}
                state={values.breakToggle}
                onChange={() => setters.setBreak(!values.breakToggle)}
            />
            <Toggle
                label={"Auto pause vídeo"}
                state={values.autoStartToggle}
                onChange={() => setters.setautoStart(!values.autoStartToggle)}
            />
        </div>
    )
}

export default SettingsFrame
