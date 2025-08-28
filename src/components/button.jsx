import Pencil from "../assets/pencil-simple.svg"
import Trash from "../assets/trash-simple.svg"
import { useState } from "react"

const Button = ({ text, size = 150, isTask = false, isSuperButton = false }) => {
    const [pressed, setPressed] = useState(false)

    const handlePress = () => {
        setPressed(!pressed)
    }

    const baseLayout = isTask ? `justify-between px-5` : `justify-center px-10`

    const baseShadow = isTask ? "shadow-[0_5px_0_0_rgba(0,0,1,0.25)]" : "shadow-[0_8px_0_0_#C36363]"

    return (
        <button
            onClick={handlePress}
            className={`
                h-[52px]
                m-5
                bg-text-100
                rounded-lg
                flex
                items-center
                transition-all duration-[30ms]
                ${baseLayout}
                ${
                    pressed && isSuperButton
                        ? "shadow-none translate-y-1"
                        : `${baseShadow} translate-y-0`
                }
        `}
            style={{ width: `${size}px` }}
        >
            <div className="flex gap-3 items-center">
                {isTask && <input type="radio" id={`radio-${text}`} />}

                <h1>{text}</h1>
            </div>

            {isTask && (
                <>
                    <div className="flex gap-3">
                        <button onClick={() => console.log("Editar")}>
                            {" "}
                            <img className="w-[25px]" src={Pencil} alt="pencil" />
                        </button>

                        <button onClick={() => console.log("Excluir")}>
                            <img className="w-[25px]" src={Trash} alt="Trash" />
                        </button>
                    </div>
                </>
            )}
        </button>
    )
}

export default Button
