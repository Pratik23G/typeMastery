import React, { Component } from "react";

class MessageNamaste extends Component {
  constructor() {
    // inside react Constructor we call super method so that
    // reacts component class and a call has to be made to the
    // base class constructor
    super();
    // state is here like a reserved key word for React
    this.state = {
      message: "Welcome Visitor Namaste Hajur lai Swagat Cha",
    };
  }

  changeMessage() {
    // use setState method to alter the state of the class Method
    this.setState({
      message: "Thank you for Subscribing Dhanyabad",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* To add the event listener in react we use the arrow function and
         make sure to use the this method*/}
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default MessageNamaste;
