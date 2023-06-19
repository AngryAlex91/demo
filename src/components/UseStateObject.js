
import React, { useState } from 'react'

function UseStateObject() {

    const [state, setState] = useState({firstname:'', lastname:''})
    const firstname = state.firstname
    const lastname = state.lastname

    function changeName(e) {
      setState(prevState=>{
        return {...prevState, firstname: e.target.value }
      })
    }
    
    

  return (
    <div>
      <input type='text' value={firstname} onChange={changeName}/>
      {/* <input type='text' value={name.lastname} onChange={e=>setName({...name, lastname:e.target.value})}/> */}
      <h1>{firstname}</h1>
      {/* <h1>{name.lastname}</h1> */}
    </div>
  )

  }
export default UseStateObject
