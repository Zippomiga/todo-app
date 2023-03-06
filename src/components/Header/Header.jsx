import './header.css'
import { useContext } from 'react'
import { TaskContext } from '../../Context/TaskContext'


export default function Header() {
  const { mode, setMode, toDo, createTask } = useContext(TaskContext)

  return (
    <header className='header'>
      <h1>
        TODO
        <button
          className={`btn-mode ${mode ? 'moon' : 'sun'}`}
          onClick={() => setMode(!mode)}
        />
      </h1>
      <form className='form-create-task' onSubmit={createTask}>
        <button className={mode ? 'btn-create-task' : 'btn-create-task dark-mode'} />
        <input
          autoFocus
          className={mode ? 'input-create-task' : 'input-create-task dark-mode'}
          placeholder='Create a new todo...'
          ref={toDo}
          type='text'
        />
      </form>
    </header>
  )
}