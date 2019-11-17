import React, { Component } from "react";
import axios from "axios";
import update from "immutability-helper";

class PostsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      inputValue: ""
    };
  }

  getPosts() {
    axios
      .get("api/v1/posts")
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => console.log(error));
  }

  createPost = event => {
    if (event.key === "Enter") {
      console.log("Pressed enter");
      axios
        .post("api/v1/posts", { post: { caption: event.target.value } })
        .then(response => {
          const posts = update(this.state.posts, {
            $splice: [[0, 0, response.data]]
          });
          this.setState({
            posts: posts,
            inputValue: ""
          });
        })
        .catch(error => console.log(error));
    }
  };

  //Method to clear text box after you press enter
  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div>
        <div className="InputContainer">
          <input
            className="CaptionInput"
            type="text"
            placeholder="What you thinking?"
            maxLength="50"
            onKeyPress={this.createPost}
            // This clears text box after you have pressed enter
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </div>
        <div className="CaptionWrapper">
          <ul id="caption" className="Caption">
            {this.state.posts.map(post => {
              return (
                <li className="posts" post={post} key={post.id}>
                  <label className="caption">{post.caption}</label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default PostsContainer;
