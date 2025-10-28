import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { TaskProvider } from './context/TasksContext'

const App = () => {
  return (
    <TaskProvider>
      <div className='container py-5' style={{ maxWidth: '600px' }}>
        <h2 className='text-center mb-4'>📝 Task Manager</h2>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  )
}

export default App
