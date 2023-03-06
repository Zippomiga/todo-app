import './normalize.css'
import './app.css'
import Header from './components/Header/Header'
import TasksList from './components/TasksList/TasksList'
import { useContext } from 'react'
import { TaskContext } from './Context/TaskContext'


export default function App() {
  const { mode } = useContext(TaskContext)

  return (
    <main className={`main-bg ${mode ? 'bg-light' : 'bg-dark'}`}>
      <Header />
      <TasksList />
    </main>
  )
}