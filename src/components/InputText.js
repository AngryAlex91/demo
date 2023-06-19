import React, { Component } from 'react'

export class InputText extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         input:'',
         text:''
      }
    }
    handleInput = event => {
        this.setState({
            input: event.target.value
        })
        event.preventDefault()
    }

    handleChange = () => {
        this.setState({
            text: this.state.input,
            input: ''

        })
    }

    
  render() {
    return (
      <div>
        <input value = {this.state.input} onChange={this.handleInput}/>
        <button onClick={this.handleChange}>Submit</button>
        <textarea value = {this.state.text} readOnly></textarea>
        
      </div>
    )
  }
}

export default InputText
