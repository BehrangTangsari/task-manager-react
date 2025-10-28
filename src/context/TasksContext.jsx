import { createContext, useState, useEffect } from 'react'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('tasks')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = task => setTasks([...tasks, task])
    const removeTask = id => setTasks(tasks.filter(t => t.id !== id))
    const editTask = (id, newText) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, text: newText } : t))
    }

    const toggleComplete = id => {
        setTasks(tasks.map(t =>
            t.id === id ? { ...t, completed: !t.completed } : t
        ))
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, editTask, toggleComplete }}>
            {children}
        </TaskContext.Provider>
    )
}
