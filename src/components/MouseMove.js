import React, { useEffect, useState } from 'react'

function MouseMove() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePositon = e => {
        console.log('mouse moving')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {

        return  () => 
        console.log('use effect')
        window.addEventListener('mousemove', logMousePositon)
    }, [])
  return (
    <div>
      Hook x - {x} y - {y}
    </div>
  )
}

export default MouseMove
