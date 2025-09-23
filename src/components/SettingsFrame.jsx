import TimeInput from "./SettingsInputs/TimeInput.jsx"
import Toggle from "./SettingsInputs/Toggle.jsx"

const SettingsFrame = ({ onClose, timePomo, timeShort, timeLong, setPomo, setShort, setLong }) => {
    return (
        <div className="w-[450px] flex flex-col items-center bg-theme-background p-5 rounded-lg shadow-lg relative">
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
                    value={timePomo}
                    onChange={(newValue) => setPomo(newValue)}
                />

                <TimeInput
                    label={"Short Break"}
                    value={timeShort}
                    onChange={(newValue) => setShort(newValue)}
                />

                <TimeInput
                    label={"Long Break"}
                    value={timeLong}
                    onChange={(newValue) => setLong(newValue)}
                />
            </div>

            <br />
            <Toggle label={"Auto Start Breaks"} />
            <Toggle label={"Auto Start Pomodoros"} />

            <div className="w-full">
                <hr className="border-white mt-1 border-1" />
            </div>
            <h1 className="text-theme-text text-xl w-full m-3">Mídia</h1>
        </div>
    )
}

export default SettingsFrame
