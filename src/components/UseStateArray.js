import React, { useState } from 'react'

function UseStateArray() {
  const [items, setItems] = useState([])

  function addItem() {
    setItems( [...items,
       {
        id: items.length,
        value: Math.floor(Math.random()*10+1)
      }]
    )

  }

 

  function deleteItem(id) {
    setItems(items.filter(item => item.id !== id))
  }
 
  return (
    <div>
      <ul>
        {items.map(item =><li key={item.id}>{item.value} <button onClick={()=>deleteItem(item.id)}>Delete</button></li>)}
       

      </ul>
      <button onClick={()=>addItem()}>Add</button>
      <button onClick={()=>setItems([])}>Reset</button>
    </div>
  )
}

export default UseStateArray
