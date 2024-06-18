import React from 'react'



const Function1=(props)=>{return <div>Welcome {props.name}</div>}

const Function2=(WrappedComponent)=>{
    return function greet(props)
    {
        return (
            <>
            <div>Question 5</div>
                <WrappedComponent {...props}/>
            </>
        )
    }
}


function Question5() {
    const Greeting=Function2(Function1)
  return (
    <>
        <div>Question 5 -Create a higher-order component (HOC) or a render prop component that encapsulates some
        functionality</div>
        <div><Greeting name={"Rama"}/></div>
    </>
  )
}

export default Question5