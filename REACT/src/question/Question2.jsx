import React from 'react'
import { useState } from 'react'

function Question2() {
    const [data,setdata]=useState(0);
    const [del,setdel]=useState(100);

    const dec=()=>{
        return setdel(del-1)
    }

  return (
    <div>
        <div>Question 2-Create a component that manages its state, such as a counter or a toggle button.</div>
        <button onClick={()=>setdata((data)=> data+1)} type='count' style={{backgroundColor:'green'}}>count: {data}</button>
        <button onClick={dec} style={{backgroundColor:'red'}}>count:{del}</button>
    </div>
  )
}

export default Question2