import { PencilIcon, TrashIcon } from "./Icons.jsx"

const Button = ({
    onClick = () => null,
    text,
    size = 150,
    isTask = false,
    isSuperButton = false,
    pressed = false,
}) => {
    const baseLayout = isTask ? `justify-between px-5` : `justify-center px-10`

    const baseShadow = isTask
        ? "shadow-[0_5px_5px_0_rgba(0,0,1,0.25)]"
        : "shadow-[0_8px_0_0] shadow-theme-text-secundary" // shadow-[0_8px_0_0] shadow-theme-text-secundary border-b-8 border-theme-text-secundary

    return (
        <button
            onClick={onClick}
            className={`
                h-[52px]
                m-5
                rounded-md
                flex
                items-center
                transition-all duration-[30ms]
                bg-theme-text
                text-theme-secundary
                
                ${baseLayout}
                ${
                    pressed && isSuperButton
                        ? "translate-y-2 shadow-none"
                        : `${baseShadow} translate-y-0`
                }
        `}
            style={{ width: `${size}px` }}
        >
            <div className="flex gap-3 items-center">
                {isTask && <input type="radio" id={`radio-${text}`} />}

                <h1 className="font-bold">{text}</h1>
            </div>

            {isTask && (
                <>
                    <div className="flex gap-3 text-theme-secundary">
                        <div className="cursor-pointer" onClick={() => console.log("Editar")}>
                            <PencilIcon className="w-[25px] h-[25px]" />
                        </div>

                        <div className="cursor-pointer" onClick={() => console.log("Excluir")}>
                            <TrashIcon className="w-[25px] h-[25px]" />
                        </div>
                    </div>
                </>
            )}
        </button>
    )
}

export default Button
