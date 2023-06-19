import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComF extends Component {
  render() {
    return ( 
      <UserConsumer>

        {
            (userName) => {
                return  <div>Hello {userName}</div>
                
            }
        }


      </UserConsumer>
    
    )
  }
}

export default ComF
