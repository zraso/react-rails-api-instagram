import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  console.log(<App />);
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("First react component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
