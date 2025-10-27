import { useRef, useState } from "react"
import Task from "./Task.jsx"

const TaskManager = ({ tasks, setTasks }) => {
    const nesxtId = useRef(0)

    const handleToggleComplete = (taskId) => {
        setTasks((currentTasks) =>
            currentTasks.map((task) =>
                task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
            )
        )
    }

    const addTask = (name, isCompleted) => {
        const newTask = { id: nesxtId.current, text: name, isCompleted: isCompleted }
        setTasks((currentTasks) => [...currentTasks, newTask])
        nesxtId.current++
    }
    const delTask = (taskId) => {
        setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId))
    }
    const textSwap = (taskId, newText) => {
        const taskToUpdate = tasks.find((task) => task.id === taskId)

        if (taskToUpdate && taskToUpdate.text === "" && newText.trim() === "") {
            delTask(taskId)
            return
        }

        setTasks((currentTasks) =>
            currentTasks.map((task) => (task.id === taskId ? { ...task, text: newText } : task))
        )
    }

    return (
        <ul className="w-full flex flex-col items-center">
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    isTask={true}
                    text={task.text}
                    isCompleted={task.isCompleted}
                    onToggleComplete={() => handleToggleComplete(task.id)}
                    deleteTask={() => delTask(task.id)}
                    onChangeText={(text) => textSwap(task.id, text)}
                    newTask={() => addTask("", false)}
                />
            ))}
            <Task newTask={() => addTask("", false)} />
        </ul>
    )
}

export default TaskManager
