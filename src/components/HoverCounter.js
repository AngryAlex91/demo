import React, { Component } from 'react'
import withComponent from './withCounter'

export class HoverCounter extends Component {
  render() {
    const {count, increment} = this.props
    return (
      <div>
        <h2 onMouseOver={increment}>hovered {count} times</h2>
      </div>
    )
  }
}

export default withComponent(HoverCounter, 1)
