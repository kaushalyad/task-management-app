import React from 'react'
import ToDoList from '../components/ToDoList'
import ToDoHeader from '../components/ToDoHeader'
const HomePage = () => {
  return (
    <div className='to-do-box bg-slate-50 pb-5'>
        <ToDoHeader />
        <ToDoList />
    </div>
  )
}

export default HomePage