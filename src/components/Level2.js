import React from "react";

class Level2 extends React.Component {
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
      this.props.nextStage();
      event.preventDefault();
    } else {
        alert("Fail! try online maybe?");
        event.preventDefault();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Level2;
