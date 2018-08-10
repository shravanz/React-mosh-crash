import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    // console.log("props", this.props);
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-default btm-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          >
            <hr />
            <h4>Counter @{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
