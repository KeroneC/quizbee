import React from "react";

class Level2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value === "social engineering") {
      alert("Answer was correct, Final stage lets GO!");
      this.props.nextStage();
      event.preventDefault();
    } else {
      alert("Fail! make sure you answer is in lower case");
      event.preventDefault();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p className="encryption">Sklvklqj lv d irup ri </p>

        <div className="level2">
            <br/>
          <p className="pclass">
            To pass this stage you will need to find the hidden encrypted
            sentence, decrypt it using CESAR CIPHER, then enter the words to
            finish the sentence.
          </p>

          <div class="col-md-4 mx-auto">
            <input
              className="form-control"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
        </div>
          <button className="submitBtn" type="submit">
            Submit
          </button>
        
      </form>
    );
  }
}

export default Level2;
