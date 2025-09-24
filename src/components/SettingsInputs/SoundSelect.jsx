const SoundSelect = ({ label, value, onChange, options = [] }) => {
    const selectId = `sound-select-${label.replace(/\s+/g, '-').toLowerCase()}`

    return (
        <div className="flex w-full items-center justify-between px-10 py-2">
            <label
                htmlFor={selectId}
                className="text-theme-text"
            >
                {label}
            </label>
            <select
                id={selectId}
                name={selectId}
                value={value}
                onChange={onChange}
                className="h-14 w-24 rounded-lg bg-theme-config text-center text-theme-text"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SoundSelect
