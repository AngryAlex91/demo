import React, { useState } from 'react'

function ColorChange() {
  const [state, setState] = useState({text:'Text', color:'red'})
  const color = state.color
  const text = state.text

  function changeColor() {
    setState(prevState => ({...prevState, color: prevState.color === 'red' ? 'blue' : 'red' }))
  }


  return (
    <div>
      <h1 style = {{color}}>{text}</h1>
      <button onClick={changeColor}>Click</button>
    </div>
  )
}

export default ColorChange



// import React, { Component } from 'react'

// export class ColorChange extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          color:'black',
//          text:'Hello'
//       }
//     }
//     handleColorChange = () => {
//         this.setState({
//             color:  this.state.color === 'black' ? 'blue' : 'black'

//         })
//     }

    
//   render() {
   
//     return (
//       <div>
       
//         <input style = {{color: this.state.color}} value = {this.state.text}/>
//         <button onClick={this.handleColorChange}>Change color</button>
       
//       </div>
//     )
//   }
// }

// export default ColorChange
