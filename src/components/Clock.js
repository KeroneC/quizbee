import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  getSeconds = () => {
    return ("0" + ((300 - this.state.count) % 60)).slice(-2);
  };

  getMinutes = () => {
    return Math.floor((300 - this.state.count) / 60);
  };

  render() {
    if (this.state.count === 300) {
      return <center>Game Over</center>;
    } else {
      return (
        <center>
          Cyber Security HELL {this.getMinutes()}:{this.getSeconds()}
        </center>
      );
    }
  }

  componentDidMount() {
    this.myinterval = setInterval(() => {
      if (this.state.count < 300) {
        this.setState((prevState) => ({
          count: prevState.count + 1,
        }));
      }
    }, 1000);
  }
}

export default Clock;
