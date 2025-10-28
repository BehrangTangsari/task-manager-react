import { useContext, useState } from 'react'
import { TaskContext } from '../context/TasksContext'

const TaskForm = () => {
    const { addTask } = useContext(TaskContext)
    const [text, setText] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (!text.trim()) return
        addTask({ id: Date.now(), text })
        setText('')
    }

    return (
        <form onSubmit={handleSubmit} className='d-flex gap-2 my-3'>
            <input
                type='text'
                className='form-control'
                placeholder='Enter a new task...'
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button className='btn btn-primary'>Add</button>
        </form>
    )
}

export default TaskForm
