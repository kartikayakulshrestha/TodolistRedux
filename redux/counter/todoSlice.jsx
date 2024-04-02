import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: [],
    count: 0
  },
  reducers: {
    
    add: (state,action) => {
      
      state.value.push(...[{
        id:state.count+1,
        checked:false,
        title:action.payload.title
      }])
      state.count+=1
    },
    dele: (state,action) =>{
      
      state.value=state.value.filter((e)=>{
        
        return action.payload.id !== e.id
      })
      
    },
    check:(state ,action)=>{
      let x=[]
    for(let i=0;i<state.value.length;i++){
        x.push(state.value[i].checked)
        
        if(state.value[i].id==action.payload[0]){
          
          state.value[i].checked=action.payload[1]
          
        } 
      }
      
      
    }
    
    
  }
  
})
export const { add, dele,check  } = todoSlice.actions

export default todoSlice.reducer

