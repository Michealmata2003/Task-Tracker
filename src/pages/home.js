import React, { useState } from 'react'
import AddTask from '../components/AddTask';
import Navbar from '../components/header/Navbar';
import Hero from '../components/home/hero/Hero';
import Tasks from '../components/Tasks';

const Home = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: "Feb 5th at 2:30pm",
        remainder: true
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: "Feb 6th at 1:30pm",
        remainder: true
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: "Feb 5th at 2:30pm",
        remainder: false
      },
    ]
  )
  //add task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    console.log(task)
  }


  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // task reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, remainder: !task.remainder } : task))
  }

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Hero
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (<Tasks tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}

        />
        ) : (
          'No Tasks To Complete'
        )}
      </div>

    </div>
  )
}

export default Home;