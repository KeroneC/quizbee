import React from "react";

class Level3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

     this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value === "Hello") {
      alert("Answer was correct");
      event.preventDefault();
    } else (
        alert("Fail! try online maybe?")
    )
  }

  render() {
    return (
      <p>bruh</p>
    )
  }
}

export default Level3;
