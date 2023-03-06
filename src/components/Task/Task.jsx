import './task.css'
import { useContext } from 'react'
import { TaskContext } from '../../Context/TaskContext'


export default function Task({ task }) {
  const { markTask, deleteTask } = useContext(TaskContext)

  return (
    <label htmlFor={task.id}>
      <button
        className={task.done ? 'btn-mark-task marked' : 'btn-mark-task'}
        id={task.id}
        onClick={() => markTask(task.id)}
      />
      <span className={task.done ? 'task completed' : 'task'}>
        {task.task}
      </span>
      <button
        className='btn-delete-task'
        onClick={() => deleteTask(task.id)}
      />
    </label>
  )
}