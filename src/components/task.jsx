import { PencilIcon, TrashIcon } from "./Icons.jsx"

const Task = ({
    isTask = false,
    text,
    size = 150,
    isCompleted = false,
    onToggleComplete = () => null,
}) => {
    const handleTaskAreaClick = (event) => {
        // Impede que o clique "borbulhe" para o botão principal
        event.stopPropagation()
        // Chama a função que veio do componente pai
        onToggleComplete()
    }

    return (
        <li
            className={`
                justify-between px-5   
                h-[52px]
                m-5
                rounded-md
                flex
                items-center
                transition-all duration-[30ms]
                bg-theme-text
                text-theme-secundary
                shadow-[0_5px_5px_0_rgba(0,0,1,0.25)]`}
            style={{ width: `${size}px` }}
        >
            <div className="flex gap-3 items-center cursor-pointer" onClick={handleTaskAreaClick}>
                {isTask && (
                    <input
                        type="checkbox"
                        // O estado 'checked' é controlado pela prop
                        checked={isCompleted}
                        // readOnly para garantir que só a div controle a mudança
                        readOnly
                    />
                )}

                {/* A classe é aplicada condicionalmente com base na prop */}
                <h1 className={`font-bold ${isCompleted && "line-through"}`}>{text}</h1>
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
        </li>
    )
}

export default Task
