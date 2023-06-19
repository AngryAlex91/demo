// import React, { useState } from 'react'

// function ChangeButton() {
//   const [state, setState] = useState({count: 0, text:'Text'})

//   const count = state.count
//   const text = state.text

//   function increment() {
//     setState(prevState => ({...prevState, count: prevState.count +1} ))
    
//   }

//   function changeText() {
//     setState(prevState => ({...prevState, text: 'newText'}))

//   }
//   return (
//     <div>
//       <h1>{text}</h1>
//       <h1>Count {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={changeText}>Click</button>
//     </div>
//   )
// }

// export default ChangeButton



import React, { Component } from 'react'

export class ChangeButton extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      text:'Text',
      count: 0
       
    }
  }

  clickHandler = () => {
    this.setState({
      text:'New text'
    })
  }

  increment = () => {
    this.setState(prevCount => ({
      count: prevCount.count + 1
    }))

  }
  
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <h1>Count - {this.state.count}</h1>
        <button onClick={this.clickHandler}>Click</button>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default ChangeButton

