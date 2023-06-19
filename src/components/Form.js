import React, { Component } from 'react'
import FormInput from './FormInput'

export class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         text:'',
         color:'blue',
         input:''              
        }
    }
    handleChangeText = event => {
        this.setState({
            text:event.target.value
        })
    }
    handleChangeColor = () => {
      this.setState({
        color: this.state.color === 'blue' ? 'red' : 'blue'
      })
    }
    handleInput = () => {
      this.setState({
        input: this.state.text
      })
    }
    handleSubmit = event => {
        alert(this.state.text)
        event.preventDefault()
        
    }
    
  render() {
    
    return (
        
    <FormInput 
    text={this.state.text}
    input={this.state.input} 
    color={this.state.color}
    colorHandler={this.handleChangeColor} 
    textHandler = {this.handleChangeText}
    inputHandler = {this.handleInput} 
    submitHandler = {this.handleSubmit}
    />
   
    )
  }
}

export default Form
