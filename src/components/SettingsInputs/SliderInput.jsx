const SliderInput = ({ label, value, onChange, min = 0, max = 100 }) => {
    const percentage = max > min ? ((value - min) / (max - min)) * 100 : 0

    return (
        <div className="w-full px-5 py-2">
            {label && <label className="text-theme-text mb-2 block text-sm">{label}</label>}
            <div className="relative h-8 flex items-center">
                {/* Background Track */}
                <div className="absolute w-full h-2 bg-theme-config rounded-lg z-0"></div>

                {/* Progress Track */}
                <div
                    className="absolute h-2 bg-theme-secundary rounded-lg z-0"
                    style={{ width: `${percentage}%` }}
                ></div>

                {/* Thumb */}
                <div
                    className="absolute w-11 h-7 bg-white rounded-full transform -translate-x-1/2 shadow-md z-10"
                    style={{ left: `${percentage}%` }}
                ></div>

                {/* Invisible Input */}
                <input
                    type="range"
                    min={min + 5}
                    max={max - 5}
                    value={value}
                    onChange={onChange}
                    className="absolute w-full h-full opacity-0 cursor-pointer z-20"
                />
            </div>
        </div>
    )
}

export default SliderInput
