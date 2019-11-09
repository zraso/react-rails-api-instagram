import React, { Component } from "react";

class PostsContainer extends Component {
  render() {
    return (
      <div>
        <div className="InputContainer">
          <input
            className="CaptionInput"
            type="text"
            placeholder="What you thinking?"
            maxlength="50"
          />
        </div>
        <div className="CaptionWrapper">
          <ul className="Caption"></ul>
        </div>
      </div>
    );
  }
}

export default PostsContainer;
