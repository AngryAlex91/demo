import React from "react";

 const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment = () => {
      this.setState(prevCount => ({
        count: prevCount.count + incrementNumber
      }))
    }
    
  
      render() {
        return (
          <div>
            <WrappedComponent count={this.state.count} increment={this.increment} {...this.props}/>
          </div>
        );
      }
    }
  
    return WithCounter;
}

export default withCounter;