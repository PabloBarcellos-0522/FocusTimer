const Button = ({
    onClick = () => null,
    text,
    size = 150,
    isSuperButton = false,
    pressed = false,
    playSound,
    volume,
}) => {
    const press = () => {
        if (playSound) {
            playSound("ButtonClick", volume / 100)
        }
        onClick()
    }

    return (
        <button
            onClick={press}
            className={`
                h-[52px]
                m-5
                rounded-md
                flex
                items-center
                transition-all duration-[30ms]
                bg-theme-text
                text-theme-secundary
                justify-center px-10
                font-bold
                hover:bg-theme-text-secundary
                hover:shadow-theme-text
                
                ${
                    !pressed && isSuperButton
                        ? "shadow-[0_8px_0_0] shadow-theme-text-secundary translate-y-0 "
                        : `translate-y-2 shadow-none`
                }
        `}
            style={{ width: `${size}px` }}
        >
            <h1>{text}</h1>
        </button>
    )
}

export default Button
