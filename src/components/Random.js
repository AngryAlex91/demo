import React, { Component } from 'react'

export class Random extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLogged: false
      }
    }
    
  render() {
    // let message
    // if (this.state.isLogged) {
    //     message = <div>Welcome Alex</div>
    // } else {
    //     message = <div>Welcome guest</div>
    // }
    // return(
    //     <div>{message}</div>
    // )
    return this.state.isLogged && <div>Welcome Alex</div>
        
    
   
}
}
export default Random
