import React, { Component } from "react";

class HeroRoles extends Component {
  constructor() {
    super();
    this.state = {
      userName: "Clark Kent",
    };
  }

  RevealName() {
    this.setState({
      userName: "SuperFlying Man!!!",
    });
  }

  render() {
    return (
      <div>
        <h2> Hi the main character is {this.state.userName}</h2>
        <button onClick={() => this.RevealName()}>
          Reveal the Secret Sauce
        </button>
      </div>
    );
  }
}

export default HeroRoles;
