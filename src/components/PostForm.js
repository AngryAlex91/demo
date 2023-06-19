import axios from 'axios'
import React, { Component } from 'react'

export class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
           
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(resp => {
            console.log(resp)
        })
        .catch(err => {
            console.log(err)
        })
    }


    
  render() {
    const {userId, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div><input type='text' name='userId' value={userId} onChange={this.handleChange}/></div> 
            <div><input type='text' name='title' value={title} onChange={this.handleChange}/></div> 
            <div><input type='text' name='body' value={body} onChange={this.handleChange}/></div> 
            <button type='submit' >Submit</button>
            
        </form>
      </div>
    )
  }
}

export default PostForm
