import './tasks-list.css'
import Task from '../Task/Task'
import { TaskContext } from '../../Context/TaskContext'
import { useContext } from 'react'


export default function TasksList() {
  const {
    mode,
    tasksList,
    setAllTasks,
    setActiveTasks,
    setCompletedTasks,
    clearCompletedTasks,
  } = useContext(TaskContext)

  const tasksLeft = tasksList.filter(task => !task.done).length


  return (
    <>
      <section className={mode ? 'list-tasks' : 'list-tasks dark-mode'}>
        {
          tasksList.map(task => (
            <Task
              key={task.id}
              task={task}
            />
          ))
        }
        <footer className='list-tasks-actions-desktop'>
          <span>{tasksLeft} items left</span>
          <button onClick={setAllTasks}>All</button>
          <button onClick={setActiveTasks}>Active</button>
          <button onClick={setCompletedTasks}>Completed</button>
          <button onClick={clearCompletedTasks}>Clear Completed</button>
        </footer>
      </section>

      <footer className={mode ? 'list-tasks-actions-mobile' : 'list-tasks-actions-mobile dark-mode'}>
        <div>
          <span>{tasksLeft} items left</span>
          <button onClick={clearCompletedTasks}>Clear Completed</button>
        </div>
        <div className='actions'>
          <button onClick={setAllTasks}>All</button>
          <button onClick={setActiveTasks}>Active</button>
          <button onClick={setCompletedTasks}>Completed</button>
        </div>
      </footer>
    </>
  )
}