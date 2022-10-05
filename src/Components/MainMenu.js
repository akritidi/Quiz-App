import React from "react";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";

function MainMenu() {
    const {gameState, setGameState} = useContext(QuizContext);
    
    return(
        <div className="Menu">
            <h1>Welcome to Quiz App!</h1>
            <h1>Are you ready?</h1>
            <button onClick={
                () => {setGameState("quiz");}
                }>Start Quiz</button>
        </div>
    );
}

export default MainMenu;