import React, { Component } from 'react'

export default class Goodbye extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Bye Bye'
        }

      }
        changeMessage() {
          this.setState({
            message: 'hellohi'
          })
        }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onCLick = {() => this.changeMessage()}>Action</button>
      </div>
    )
  }
}
