import { createContext, useState, useRef, useEffect } from "react"
import { initialTasks } from '../sources.js'


export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [mode, setMode] = useState(true)
  const [tasksList, setTasksList] = useState(initialTasks)

  const toDo = useRef()
  const prevTasksList = useRef([])

  const prevIndex = prevTasksList.current.length - 1

  const allTasksUndone = tasksList.every(task => !task.done)
  const allTasksDone = tasksList.every(task => task.done)

  useEffect(() => {
    prevTasksList.current.push(tasksList)
  }, [tasksList])


  function createTask(e) {
    e.preventDefault()
    if (!toDo.current.value) return

    const newTask = {
      id: tasksList.length + 1,
      task: toDo.current.value,
      done: false
    }

    toDo.current.value = null
    prevTasksList.current.length = 0
    setTasksList([...tasksList, newTask])
  }


  function markTask(id) {
    const markedTask = [...tasksList].find(task => task.id === id)
    markedTask.done = !markedTask.done
    setTasksList([...tasksList])
  }


  function deleteTask(id) {
    prevTasksList.current.length = 0
    setTasksList([...tasksList].filter(task => task.id !== id))
  }


  function setAllTasks() {
    if (prevIndex === -1) return
    setTasksList([...prevTasksList.current[prevIndex]])
  }


  function setActiveTasks() {
    if (allTasksDone) return
    setTasksList([...tasksList].filter(task => !task.done))
  }


  function setCompletedTasks() {
    if (allTasksUndone) return
    setTasksList([...tasksList].filter(task => task.done))
  }


  function clearCompletedTasks() {
    if (allTasksUndone) return
    prevTasksList.current.length = 0
    setTasksList(prevTasksList =>
      prevTasksList.map(task =>
        ({ ...task, done: false })
      )
    )
  }



  return (
    <TaskContext.Provider value={{
      mode,
      setMode,
      tasksList,
      toDo,
      createTask,
      markTask,
      deleteTask,
      setAllTasks,
      setActiveTasks,
      setCompletedTasks,
      clearCompletedTasks
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}