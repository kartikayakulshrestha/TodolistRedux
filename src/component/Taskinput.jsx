import React from 'react';
import { useDispatch } from 'react-redux';
import { add  } from '../../redux/counter/todoSlice';
import {useState} from "react"
const Taskinput = () => {
  const dispatch = useDispatch()
  const [inp,setinp]=useState("")
  function addtodo(){
    dispatch(add({title:inp.trim()}))
    setinp("")
  }
  return (
    <div>
      <input type = "text" placeholder='Add your todo' value={inp} onChange={(e)=>{setinp(e.target.value)}}></input>
      
      <button onClick={addtodo} className='btn btn-primary m-1'>ADD</button>
    </div>
  )
}

export default Taskinput
