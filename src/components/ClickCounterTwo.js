import React, { Component } from 'react'

export class ClickCounterTwo extends Component {
    
  render() {
    const {count, increment} = this.props
    return (
      <div>
        <button onClick={increment}>{count} times</button>
      </div>
    )
  }
}

export default ClickCounterTwo
