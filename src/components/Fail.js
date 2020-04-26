import React from "react";


    const Start = ({timeUp}) => (
        <div className="title-screen">
            <div className="instructions"><p className="pclass">Time is up! Looks like yu are staying for all eternity! WAHAHAHAHA!!</p></div>
            <button className="startBtn" onClick={timeUp}>
                back to title
            </button>
        </div>
    );

    export default Start;