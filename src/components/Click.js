import React, { useState } from 'react'



function Click() {

const [text, setText] = useState('Not clicked')

const handleClick = () => {
  setText('Clicked' )
}
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Click


// import React, { Component } from 'react'

// export class Click extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          text:'Not clicked'
//       }

//     }
    

  

//        clickHendler = () => {
//         this.setState({
//             text:'CLick CLack'
//         })
//        }
    
//   render() {
//     return (
//       <div>
//         <h1>{this.state.text}</h1>
       
//         <button onClick={this.clickHendler}>Click</button>
//       </div>
//     )
//   }
// }

// export default Click