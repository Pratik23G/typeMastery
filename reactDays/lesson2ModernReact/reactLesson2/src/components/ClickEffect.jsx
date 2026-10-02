import React, { Component } from "react";

class ClickerEffect extends Component {
  constructor() {
    super();
    this.state = {
      userButton: false,
    };
  }

  buttonClick() {
    this.setState((prevState) => ({
      userButton: !prevState.userButton,
    }));
  }

  render() {
    return (
      <div>
        <h4>Thank you for reaching this far!!</h4>
        <button
          className={this.state.userButton ? "Pressed" : "Liked"}
          onClick={() => this.buttonClick()}
        >
          {this.state.userButton ? "Press the Button" : "Button Liked Nice"}
        </button>
      </div>
    );
  }
}

export default ClickerEffect;
