import React from "react";

const Result =({score,playAgain}) =>(
    <div className="score-board">
        <div className="score">You scored {score} / 5 correct answers!</div>
    </div>
);

export default Result;