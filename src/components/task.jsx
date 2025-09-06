import { PencilIcon, TrashIcon, PlusCircleIcon } from "./Icons.jsx"
import { useState } from "react"

const Task = ({
    isTask = false,
    text = "Add Task",
    size = 150,
    isCompleted = false,
    onToggleComplete = () => null,
    deleteTask = () => null,
    newTask = () => null,
    onChangeText = () => null,
}) => {
    const [isEditing, setIsEditing] = useState(!text)

    const handleTaskAreaClick = (event) => {
        event.stopPropagation()
        if (!isEditing) {
            onToggleComplete()
        }
    }
    const clickDellTask = (event) => {
        event.stopPropagation()
        deleteTask()
    }
    const clickAddTask = (event) => {
        event.stopPropagation()
        newTask()
    }

    const handleBlur = (e) => {
        setIsEditing(false)
        onChangeText(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            e.target.blur()
            if (!text) newTask()
        } else if (e.key === "Escape") {
            e.preventDefault()
            e.target.value = text
            e.target.blur()
        }
    }

    const handleEditClick = (e) => {
        e.stopPropagation()
        setIsEditing(true)
    }

    return (
        <li
            onClick={isTask ? null : clickAddTask}
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
                ${
                    isTask
                        ? "justify-between px-5 border-l-8 border-theme-secundary"
                        : "justify-center cursor-pointer"
                }`}
            style={{ width: `${size}px` }}
        >
            <div
                className="flex gap-3 items-center cursor-pointer"
                onClick={isTask ? handleTaskAreaClick : null}
            >
                {isTask && !isEditing && (
                    <input
                        type="checkbox"
                        checked={isCompleted}
                        className="accent-theme-primary h-5 w-5"
                        readOnly
                    />
                )}

                {!isTask && <PlusCircleIcon className="w-[25px] h-[25px]" />}

                {isEditing ? (
                    <input
                        type="text"
                        defaultValue={text}
                        autoFocus
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        className="font-bold bg-transparent outline-none w-full"
                    />
                ) : (
                    <h1
                        className={`font-bold relative after:content-[''] after:absolute after:bg-current after:h-[2px] after:top-1/2 after:-translate-y-1/2 after:left-0 after:transition-[width] after:duration-500 after:ease-in-out ${
                            isCompleted ? "after:w-full" : "after:w-0"
                        }`}
                    >
                        {text}
                    </h1>
                )}
            </div>

            {isTask && !isEditing && (
                <div className="flex gap-3 text-theme-secundary">
                    <div className="cursor-pointer" onClick={handleEditClick}>
                        <PencilIcon className="w-[25px] h-[25px]" />
                    </div>

                    <div className="cursor-pointer" onClick={clickDellTask}>
                        <TrashIcon className="w-[25px] h-[25px]" />
                    </div>
                </div>
            )}
        </li>
    )
}

export default Task
