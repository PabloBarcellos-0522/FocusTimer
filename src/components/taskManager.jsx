import { useState } from "react"
import Task from "./task.jsx"

const TaskManager = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Fazer café", isCompleted: false },
        { id: 2, text: "Estudar React", isCompleted: true },
        { id: 3, text: "Ir para a academia", isCompleted: false },
    ])

    const handleToggleComplete = (taskId) => {
        setTasks((currentTasks) =>
            currentTasks.map((task) =>
                task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
            )
        )
    }

    const addTask = () => {}
    const delTask = () => {}

    return (
        <ul>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    isTask={true}
                    text={task.text}
                    size={400}
                    isCompleted={task.isCompleted}
                    onToggleComplete={() => handleToggleComplete(task.id)}
                />
            ))}
            <Task size={400} />
        </ul>
    )
}

export default TaskManager
