import React from "react";

const Advance = ({score, nextStage}) => (
    <div className="score-board">
        <div className="score">You scored {score} / 5 correct answers!</div>
        
        <button className="startBtn" onClick={nextStage}>
            Advance to next level!
        </button>
    </div>
);

export default Advance;