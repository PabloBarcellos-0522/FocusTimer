import { PencilIcon, TrashIcon, PlusCircleIcon } from "./Icons.jsx"

const Task = ({
    isTask = false,
    text = "Add Task",
    size = 150,
    isCompleted = false,
    onToggleComplete = () => null,
    onClick = () => null,
}) => {
    const handleTaskAreaClick = (event) => {
        event.stopPropagation()
        onToggleComplete()
    }

    return (
        <li
            onClick={() => console.log("Clicou na task")}
            className={`   
                h-[52px]
                m-5
                rounded-md
                flex
                items-center
                transition-all duration-[30ms]
                bg-theme-text
                text-theme-secundary
                shadow-[0_5px_5px_0_rgba(0,0,1,0.25)]
                hover:bg-theme-text-secundary
                ${isTask ? "justify-between px-5" : "justify-center cursor-pointer"}`}
            style={{ width: `${size}px` }}
            {...(isTask ? { onClick } : {})}
        >
            <div className="flex gap-3 items-center cursor-pointer" onClick={handleTaskAreaClick}>
                {isTask && <input type="checkbox" checked={isCompleted} readOnly />}

                {!isTask && <PlusCircleIcon className="w-[25px] h-[25px]" />}

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
