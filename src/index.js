import React, { Component } from "react";
import ReactDOM from "react-dom"; //Render for web app
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";
import Start from "./components/Start";
import Advance from "./components/Advance";
import Level2 from "./components/Level2";
import Level3 from "./components/Level3";
import Title from "./components/Title";
import Fail from "./components/Fail";



class QuizBee extends Component {

    state = {
        questionBank: [],
        score: 0,
        responses: 0,
        start: 0,
        level: 0,
        timeleft: 300
        
    }; 

    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };

    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer){
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        });
    };

    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0,
            start: 1
        })
    }

    timeUp = () => {
        this.setState({
            score: 0,
            responses: 0,
            start: 0,
            level: 0,
            timeleft: 300
        })
    }

    nextStage = () => {

        this.setState({
            score: 0,

            responses: 0,
            level: this.state.level + 1
        })
    }

    componentDidMount(){ //get data from API
        this.getQuestions();

        this.myinterval = setInterval(() => {
      if (this.state.timeleft >= 0 && this.state.start === 1) {
        this.setState((prevState) => ({
          timeleft: prevState.timeleft - 1,
        }));
      }
    }, 1000);

    }

    render() {
        return (
            <div className="container">

                
                
                <Title status={this.state.start} timeUp={this.timeUp} />
               

                {this.state.start === 0 && this.state.level === 0 && this.state.timeleft >= 0 ? (<Start playAgain={this.playAgain} />) : null }
                {this.state.start === 1 && this.state.level === 1 && this.state.timeleft >= 0 ? (<Level2  nextStage={this.nextStage}/>) : null }
                {this.state.start === 1 && this.state.level === 2 && this.state.timeleft >= 0 ? (<Level3  />) : null }
                
                {this.state.questionBank.length > 0 
                && this.state.responses < 5 
                && this.state.timeleft > 0 
                && this.state.start !== 0
                && this.state.level === 0
                && this.state.questionBank.map(({question, answers, correct, questionId}) => (
                    
                    <QuestionBox 

                    question = {question}
                    options = {answers}
                    key = {questionId}
                    selected = {answer => this.computeAnswer(answer, correct)}
                    
                    />

                )

                
                )}

                {this.state.responses === 5 && this.state.score < 5 && this.state.timeleft >= 0  ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null }
                {this.state.responses === 5 && this.state.score === 5 && this.state.timeleft >= 0  ? (<Advance score={this.state.score} nextStage={this.nextStage} />) : null }
                
                {this.state.timeleft <= 0 ? (<Fail timeUp={this.timeUp} />):null}
            </div>
        );
    }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));