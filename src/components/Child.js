import React from 'react'

function Child({person}) {
  return (
    <div>
      <h1>{person.id} {person.name} {person.age}</h1>
      {/* <button onClick={''}>add person</button> */}
    </div>
  )
}

export default Child
