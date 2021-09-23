import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ["sara", "elliot", "beck"],
      i: 0
    };
  }

  namechange = () => {
    console.log("you are here");

    let index = this.state.i;
    index = index + 1;
    let finalindex = index < this.state.name.length ? index : 0;
    console.log(this.state.i);
    this.setState({
      i: finalindex
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.name[this.state.i]}</h1>
        <button onClick={this.namechange}>Change Name</button>
      </div>
    );
  }
}

export default App;
