
import './App.css'



//import Navbar from "./Navbar"

import Taskview from './component/Taskview'
import Taskinput from './component/Taskinput'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
function App() {
  const todolist = useSelector(state => state.todolist.value)
  useEffect(()=>{
    localStorage.setItem("Todolist",JSON.stringify(todolist))
  },[todolist])
  return (
    <div>
    
    <div className='container '>
    <div className='row mt-4'>
      <div className='col-lg-4 col-xs-1 col-sm-2'></div>
      <div className='col-lg-4 col-xs-10 card mt-4 shadow-sm col-sm-8'>
        <h1>Todo List</h1>
        <Taskview />
        <Taskinput />
      </div>
      <div className='col-lg-4 col-xs-1 col-sm-2'></div>
    </div>
    
    </div>
    
    
    
    </div>
  )
}

export default App
