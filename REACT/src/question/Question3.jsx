import React from 'react'
import { useState } from 'react'

function Question3() {
    const [gate,setGate]=useState(false);

    const greet=()=>{ setGate(!gate);}

  return (
    <>
    <div>Question3 Create a component that conditionally renders different content based on its state or props.</div>
    <button onClick={greet}>{gate? 'Welcome Happy journey :)':'Train door is Closing Hurryup ...'}</button>
    </>
  )
}

export default Question3



