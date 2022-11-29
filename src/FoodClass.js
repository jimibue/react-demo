import React, { useState } from "react";
import FavoriteFoods from "./FavoriteFoods";

class FoodClass extends React.Component {
  state = { count: 0 };

  decrementCount = () => {
    this.setState({
        count: this.state.count - 1
    })
  };

  incrementCount = () => {
    this.setState({
        count: this.state.count + 1
    })
  };

  formatName(str) {
    // this is string
    // return `----${str}-----`
    // this is jsx
    return <p>{str}</p>;
  }
  render() {
    return (
      <div className="bordered">
        <h1>{this.formatName(this.props.name)}</h1>
        <p>order count is: {this.state.count}</p>
        <button onClick={this.incrementCount}>+ add to order</button>
        <button onClick={this.decrementCount}>- remove from</button>
      </div>
    );
  }
}

export default FoodClass
