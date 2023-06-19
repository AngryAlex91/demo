import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         error:''
      }
    }
    
    componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(resp => {
        this.setState({posts: resp.data})
      }) 
      .catch(err => {
        this.setState({errorMsg:'error'})
      })
    }

  
  render() {
    const { posts, errorMsg } = this.state
    return (
      <div>
        list of posts
        {
        posts.length? 
        posts.map(post => <div key={post.id}>{post.title}</div>):
        null 
        }
        {
          errorMsg ? <div>{errorMsg}</div> :null

        }
      </div>
    )
  }
}

export default PostList
