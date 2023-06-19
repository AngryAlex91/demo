import React, { Component } from 'react'

export default class Car extends Component {

    constructor(props) {
       super(props)
        this.car = {
            id: this.id,
            name: this.name,
            cost: this.cost


        }
     
    }

  render() {
    return (
      <div>
            <h1>{this.name}</h1>
      </div>
    )
  }
}
