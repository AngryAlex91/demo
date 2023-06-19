import React, { createElement } from 'react'
import  ReactDOM  from 'react-dom'



function PortalDemo() {
  return ReactDOM.createPortal (
    <h1>Portal</h1>, document.getElementById('meta-root')
  )
  }
export default PortalDemo
