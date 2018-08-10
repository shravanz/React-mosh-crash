import React, { Component } from "react";
import NavBar from "./components/navBar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
  };

  //using Arrow function for bind issue to solved
  //And passing An argument for event handler
  handleIncrement = counter => {
    //We need to update the State
    //create new array clone using Spread operator
    const counters = [...this.state.counters];
    //we need the index of the counters array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    //this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = counter => {
    //We need to update the State
    //create new array clone using Spread operator
    const counters = [...this.state.counters];
    //we need the index of the counters array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
    //console.log(product);
    //this.setState({ value: this.state.value - 1 });
  };
  //State change belong the same component
  //cannnot modified by other component
  handleDelete = id => {
    //console.log("Event Handler called", id);
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    const resetCounters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ resetCounters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main style={{ backgroundColor: "#fffdd0" }} className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
