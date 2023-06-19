import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
  render() {
    const {count, increment} = this.props
    return (
      <div>
        <h2 onMouseOver={increment}>{count} times</h2>
      </div>
    )
  }
}

export default HoverCounterTwo
