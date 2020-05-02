import React from "react";

const Finish = ({timeUp}) => (
    <div className="score-board">
        <div className="score">Congratulations! You made it just in time</div>
        
        <button className="startBtn" onClick={timeUp}>
            Play again!
        </button>
    </div>
);

export default Finish;