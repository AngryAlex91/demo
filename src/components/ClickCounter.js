import React, { Component } from 'react'
import withComponent from './withCounter'

export class ClickCounter extends Component {
  

  
  
  render() {
    const {count, increment} = this.props
    return (
      <div>
        <button onClick={increment}>clicked {count} times</button>
      </div>
    )
  }
}

export default withComponent(ClickCounter, 2)
