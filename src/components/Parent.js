import React, { Component } from 'react'
import NewChild from './NewChild'

export default class Parent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         color:'Green'
      }
    }
    showColor = (childColor) => {
        alert(`THis color is ${this.state.color} and also ${childColor}`)
    }
  render() {
    return (
      <div>
        <NewChild eHandler = {this.showColor}/>
      </div>
    )
  }
}
