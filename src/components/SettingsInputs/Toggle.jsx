const Toggle = ({ label, state, onChange }) => {
    return (
        <div className="w-full flex items-center justify-between pl-10 pr-10 m-2">
            <label className="text-theme-text mb-1">{label}</label>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={state}
                    onChange={onChange}
                    className="sr-only peer"
                />
                <div
                    className="w-16 h-11 bg-theme-background 
                    rounded-full peer 
                    ring-2 ring-zinc-500
                    peer-checked:ring-theme-secundary
                    peer-checked:after:translate-x-[24px]
                    after:content-[''] 
                    after:absolute after:top-1.5
                    after:start-[4px] 
                    after:bg-zinc-500
                    peer-checked:after:bg-white
                    after:rounded-full 
                    after:h-8 after:w-8
                    after:transition-all
                    peer-checked:bg-theme-secundary"
                ></div>
            </label>
        </div>
    )
}

export default Toggle
