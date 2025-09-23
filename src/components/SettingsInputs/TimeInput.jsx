const TimeInput = ({ label, value, onChange }) => {
    return (
        <div className="flex flex-col items-center m-2">
            <label className="text-theme-text mb-1">{label}</label>
            <input
                type="number"
                value={value}
                onChange={(e) => {
                    const val = e.target.value
                    onChange(val === "" ? "" : Number(val))
                }}
                className="w-24 h-14 rounded-lg text-center text-theme-text bg-theme-config"
                min="1"
            />
        </div>
    )
}

export default TimeInput
