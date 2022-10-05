import React from "react";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import {Questions} from "../Helpers/Questions";
import "../App.css";

function EndScreen() {
    const {score, setScore, setGameState} = useContext(QuizContext);

    const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
    };
    
    return (
        <div className="EndScreen">
            {score === Questions.length && <h1>Congratulations!</h1>}
            {score !== Questions.length && score >= Questions.length/2 && <h1>Nice try!</h1>}
            {score !== Questions.length && score < Questions.length/2 && <h1>Better luck next time!</h1>}
            <h1>Your Score:</h1>
            <h1>
                {score} / {Questions.length}
            </h1>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
}

export default EndScreen;