import Button from "./Button.jsx"

const SettingsFrame = ({ onClose }) => {
    return (
        <div className="w-[450px] flex flex-col items-center bg-theme-config p-5 rounded-lg shadow-lg relative">
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
                <label className="font-bold text-white"></label>
                <hr className="border-white mt-1 border-1" />
            </div>
            <Button text={"Hello"}></Button>
        </div>
    )
}

export default SettingsFrame
