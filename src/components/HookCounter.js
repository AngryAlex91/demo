import React, { useEffect, useState } from 'react'

function HookCounter() {

  const [state, setState] = useState({count: 0, text: 'asdfasdf'})
  const count = state.count
  const text = state.text
  

  useEffect(()=>{
    document.title = `Clicked ${count} times`
  }, [count])

  function increment() {
    setState(prevState => {
      return {...prevState, count: prevState.count + 1}
    }
      
      )
  }

  const changeText = e => {
    setState (prevState => {
      return {...prevState, text: e.target.value}
    })
  }

  
  

    
  return (
    <div>
     <button onClick={increment}>+</button>
     <span>{count}</span>
     <input type='text' value={text} onChange={changeText}/>
     
    </div>
  )
}

export default HookCounter
