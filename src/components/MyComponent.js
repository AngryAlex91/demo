import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      text: ''
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

 

  calculateExpression = () => {
    try {
      const result = eval(this.state.inputValue);
      this.setState({ text: result, inputValue: '' });
      
    } catch (error) {
        this.setState({ text: error.message, inputValue: ''});
      
    }
  };

  render() {
    return (

        <div>
        
      
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.calculateExpression}>Calculate</button>
        <textarea type='text' value={this.state.text} ></textarea>

        
      
      
      </div>

    )
      
  }
}

export default MyComponent;
