import React, { Component } from 'react'

export default class Greetings extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      text:'Text Text'
       
    }

  }
   textChange = () => {
    this.setState({
      text:'New text'
    })

  }
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.textChange}>Click</button>
      </div>
    )
  }
}
