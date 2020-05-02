import React from "react";
import trueorfalse from "../quizService/trueorfalse";

class Level3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isloaded: false,
    };

    this.handleTrue = this.handleTrue.bind(this);
    this.handleFalse = this.handleFalse.bind(this);
  }

  componentDidMount() {
    trueorfalse().then((items) => {
      this.setState({
        isloaded: true,
        items: items,
      });
    });
  }

  handleTrue() {

    if(this.state.items[0].answer === "T"){
    alert("Answer Correct")
  } else {
    alert("AWWW, so close")
  }

  }

  handleFalse() {
   
  if(this.state.items[0].answer === "F"){
    alert("Answer Correct! You win!")
  } else {
    alert("AWWW, so close")
  }

  }

  render() {
    var { isloaded, items } = this.state;

    if (isloaded) {
      return (
        <div className="level2">
          <br />
          {items.map((item) => (
            <div>
              <p className="pclass">{item.question}</p>

              <button
                
                type="button"
                className="btn btn-danger"
                onClick={this.handleTrue}
              >
                True
              </button>
              &nbsp;&nbsp;
              <button
                
                type="button"
                className="btn btn-danger"
                onClick={this.handleFalse}
              >
                False
              </button>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="level2">
          <br />
          <p className="pclass">Loading...</p>
          <button type="button" className="btn btn-danger">
            True
          </button>
          &nbsp;&nbsp;
          <button type="button" className="btn btn-danger">
            False
          </button>
        </div>
      );
    }
  }
}

export default Level3;
