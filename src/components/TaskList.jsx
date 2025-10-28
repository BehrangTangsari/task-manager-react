import { useContext, useState } from 'react'
import { TaskContext } from '../context/TasksContext'

const TaskList = () => {
    const { tasks, removeTask, editTask, toggleComplete } = useContext(TaskContext)
    const [editingId, setEditingId] = useState(null)
    const [editedText, setEditedText] = useState('')

    const handleEdit = task => {
        setEditingId(task.id)
        setEditedText(task.text)
    }

    const handleSave = id => {
        if (!editedText.trim()) return
        editTask(id, editedText)
        setEditingId(null)
        setEditedText('')
    }

    const incompleteTasks = tasks.filter(t => !t.completed)
    const completedTasks = tasks.filter(t => t.completed)

    return (
        <div>
            {/* Tasks In Progress */}
            <h5 className='mt-4 mb-2 text-primary'>⏳ In Progress</h5>
            {incompleteTasks.length === 0 && <p className='text-muted'>No tasks in progress</p>}
            <ul className='list-group mb-4'>
                {incompleteTasks.map(task => (
                    <li key={task.id} className='list-group-item d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-2' style={{ flex: 1 }}>
                            <input
                                type='checkbox'
                                className='form-check-input'
                                onChange={() => toggleComplete(task.id)}
                                checked={task.completed}
                            />
                            {editingId === task.id ? (
                                <input
                                    type='text'
                                    className='form-control'
                                    value={editedText}
                                    onChange={e => setEditedText(e.target.value)}
                                />
                            ) : (
                                <span>{task.text}</span>
                            )}
                        </div>

                        <div className='d-flex gap-2'>
                            {editingId === task.id ? (
                                <button className='btn btn-success btn-sm' onClick={() => handleSave(task.id)}>Save</button>
                            ) : (
                                <button className='btn btn-warning btn-sm' onClick={() => handleEdit(task)}>Edit</button>
                            )}
                            <button className='btn btn-danger btn-sm' onClick={() => removeTask(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Completed Tasks */}
            <h5 className='mt-4 mb-2 text-success'>✅ Completed</h5>
            {completedTasks.length === 0 && <p className='text-muted'>No completed tasks</p>}
            <ul className='list-group'>
                {completedTasks.map(task => (
                    <li key={task.id} className='list-group-item d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-2' style={{ flex: 1 }}>
                            <input
                                type='checkbox'
                                className='form-check-input'
                                onChange={() => toggleComplete(task.id)}
                                checked={task.completed}
                            />
                            <span style={{ textDecoration: 'line-through', color: 'gray' }}>
                                {task.text}
                            </span>
                        </div>
                        <button className='btn btn-danger btn-sm' onClick={() => removeTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList
