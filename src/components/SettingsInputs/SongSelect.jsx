const SondSelect = ({ label, value, onChange }) => {
    return (
        <div className="flex w-full pl-10 pr-10">
            <form className="flex w-full justify-between items-center m-2">
                <label className="text-theme-text mb-1" for="carros">
                    {label}
                </label>
                <select
                    className="w-24 h-14 rounded-lg text-center text-theme-text bg-theme-config"
                    id="Sons"
                    name="Sons"
                >
                    <option value="sond1">A</option>
                    <option value="sond2">B</option>
                    <option value="sond3">C</option>
                    <option value="sond4">D</option>
                </select>
            </form>
        </div>
    )
}

export default SondSelect
