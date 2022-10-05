import React, {useState, useContext} from "react";
import {Questions} from "../Helpers/Questions";
import { QuizContext } from "../Helpers/Contexts";

function Quiz() {
    const {score, setScore, setGameState} = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");


    const nextQuestion = () => {
        if (Questions[currQuestion].asnwer === optionChosen) {
            setScore(score + 1);
        }
        setOptionChosen("");
        setCurrQuestion(currQuestion + 1);
    };
    
    const finishQuiz = () => {
        if (Questions[currQuestion].asnwer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("endScreen");
    }

    return(
        <div className="Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="Options">
                <button className="AnswerButtons" onClick={() => setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
                <button className="AnswerButtons" onClick={() => setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
                <button className="AnswerButtons" onClick={() => setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
                <button className="AnswerButtons" onClick={() => setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
            </div>
            {currQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz} id="nextQuestion">Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion} id="nextQuestion">Next Question</button>
            )}
            <h2>{currQuestion + 1}/{Questions.length}</h2>
        </div>
    );
}

export default Quiz;