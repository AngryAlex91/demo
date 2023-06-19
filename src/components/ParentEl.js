import React, { Component } from 'react'
import PortalDemo from './PortalDemo'

export class ParentEl extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text:''
      }
    }
    

    handleClick = () => {
        
        
    }

  render() {
    return (
      <div>
        <h1>Click the button to see secret message</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default ParentEl
