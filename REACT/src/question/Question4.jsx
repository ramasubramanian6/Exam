import React from 'react'
import { useState } from 'react';







function Question4() {
    const [mail,setmail]=useState();
    const [valid,setvalid]=useState(false);

    const OnChangetext=(e)=>{ 
        setmail(e.target.value);
    }
    
    const vaildmail=()=>{return  /\S+@\S+\.\S+/.test(mail); }
    const test=(e)=>
        {
            e.preventDefault();
            if(vaildmail())
            { 
                setmail("");
                return setvalid(true) 
            }
        }

  return (
    <div>
        <form  onSubmit={test}>
            <label>Mail ID:<input type='mail' value={mail} onChange={OnChangetext}/></label>
            <button type='submit' >Submit</button>
            {valid ? <h4>Welcome</h4>:<h4>Please Enter  Mail</h4>}
        </form>
    </div>
  )
}

export default Question4