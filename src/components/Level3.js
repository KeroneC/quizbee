import React from "react";
import trueorfalse from "../quizService/trueorfalse";

class Level3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isloaded: false,
      start: 0
    };

    this.handleTrue = this.handleTrue.bind(this);
    this.handleFalse = this.handleFalse.bind(this);
    this.handleStart = this.handleStart.bind(this)
  }

  componentDidMount() {
    trueorfalse().then((items) => {
      this.setState({
        isloaded: true,
        items: items,
        
      });
    });
  }

  handleTrue(event) {

    if(this.state.items[0].answer === "T"){

    alert("Answer Correct")
    this.props.win()
    event.preventDefault();

  } else {

    alert("AWWW, so close")
    this.props.playAgain()
    event.preventDefault();

  }

  }

  handleFalse(event) {
   
  if(this.state.items[0].answer === "F"){
    alert("Answer Correct! You win!")
    this.props.win();
    event.preventDefault();
  } else {
    alert("AWWW, so close")
    this.props.playAgain();
    event.preventDefault();
  }

  }

  handleStart(event){
    this.setState({start: 1 });
  }

  render() {
    var items = this.state.items;
    var start = this.state.start;

    if (start > 0) {
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
          <p className="pclass">The next question is True or false. Answer correctly you win, answer incorrectly you are sent back to level 1. </p>
          
          <button type="button" className="btn btn-danger" onClick={this.handleStart}>
            Lets finish this
          </button>
          
          
        </div>
      );
    }
  }
}

export default Level3;
