import React, { Component } from 'react'

export class CounterTwo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  increment = () => {
    this.setState(prevCount => ({
      count: prevCount.count + 1
    }))
  }
  
  render() {
    return (
      <div>
        {this.props.children(this.state.count, this.increment)}
      </div>
    )
  }
}

export default CounterTwo
