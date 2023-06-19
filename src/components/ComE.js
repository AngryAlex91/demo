import React, { Component } from 'react'
import ComF from './ComF'
import { UserContext } from './userContext'

export class ComE extends Component {

    static contextType = UserContext
  render() {
    return (
      <div>
        {this.context}
        <ComF />
      </div>
    )
  }
}

export default ComE
