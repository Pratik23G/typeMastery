import React, { Component } from "react";
import "./LikeButton.css";
class Likesbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likedButton: false,
    };
  }

  clickFunction() {
    this.setState((prevState) => ({
      likedButton: !prevState.likedButton,
    }));
  }

  render() {
    return (
      <div>
        <h4>Thank you for reaching all the way to this point of video</h4>
        <button
          className={this.state.likedButton ? "like-btn liked" : "like-btn"}
          onClick={() => this.clickFunction()}
        >
          {this.state.likedButton ? "Liked" : "Please Hit Like!"}
        </button>
      </div>
    );
  }
}

export default Likesbutton;
