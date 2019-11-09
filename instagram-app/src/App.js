import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostsContainer from "./components/PostsContainer";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Posts</h1>
      </div>
      <PostsContainer />
    </div>
  );
}

export default App;
