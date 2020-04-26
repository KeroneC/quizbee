import React from "react";


    const Start = ({playAgain}) => (
        <div className="title-screen">
            <div className="instructions"><p className="pclass">Welcome to Cyber Security Hell. You have 5 minutes to pass all 3 stages that will test your 
                Cyber Security knowledge! If you fail to pass a stage u will be stuck in Hell for all eternity. WAHAHAHAHA!!</p></div>
            <button className="startBtn" onClick={playAgain}>
                Lets Do this!
            </button>
        </div>
    );

    export default Start;