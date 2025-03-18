import React, { Component } from "react";

import "./Counter.css";

class Counter extends Component {
  state = { count: 0 };

  onIncreaseCounter = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div className="d-flex flex-column container">
        <h1 className="heading">
          The Button has been clicked <br />{" "}
          <span className="count">{count}</span> times
        </h1>
        <div>
          <button onClick={this.onIncreaseCounter} className="btn btn-primary">
            Click Me!
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
