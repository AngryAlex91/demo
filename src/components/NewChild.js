import React from 'react'

function NewChild(props) {
  return (
    <div>
      <button onClick={() => props.eHandler('red')}>Show color</button>
    </div>
  )
}

export default NewChild
