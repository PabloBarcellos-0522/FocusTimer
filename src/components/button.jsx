import { PencilIcon, TrashIcon } from "./Icons.jsx"

const Button = ({
    onClick = () => null,
    text,
    size = 150,
    isSuperButton = false,
    pressed = false,
}) => {
    const handleTaskAreaClick = (event) => {
        // Impede que o clique "borbulhe" para o botão principal
        event.stopPropagation()
        // Chama a função que veio do componente pai
        onToggleComplete()
    }

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
                justify-center px-10
                font-bold
                hover:bg-theme-text-secundary
                hover:shadow-theme-text
                
                ${
                    pressed && isSuperButton
                        ? "translate-y-2 shadow-none"
                        : `shadow-[0_8px_0_0] shadow-theme-text-secundary translate-y-0`
                }
        `}
            style={{ width: `${size}px` }}
        >
            <h1>{text}</h1>
        </button>
    )
}

export default Button
