import React from "react"
import { useSelector, useDispatch } from 'react-redux'

import { dele , check } from '../../redux/counter/todoSlice'
function Taskview(){
    const todolist = useSelector(state => state.todolist.value)
    const count =useSelector(state => state.todolist.count)
    const dispatch = useDispatch()
    let c=0
    const deletetodo= (e)=>{
    
        dispatch(dele(e))
      }
    return <>
        {todolist.length>0 && todolist.map((e)=>{
            c++;
      return <div key={e.id}>
      {!e.checked?<h5>{c}.) {e.title} </h5>:<s className="" style={{color:"grey"}}><i><h5>{c}.) {e.title} </h5> </i></s>} 
      Completed <input type="checkbox" checked={e.checked} onClick={()=>{dispatch(check([e.id,!e.checked]))}} ></input>
      <button onClick={()=>deletetodo(e)} className="btn btn-danger w-4 m-2 ">remove</button>
      </div>
    })}
    </>
}
export default Taskview