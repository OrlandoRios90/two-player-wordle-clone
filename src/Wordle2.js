//this was a first draft and the component will not be used

import { useState, useEffect } from "react";

function Wordle2 () {

    const [game, setGame] = useState({
        playerOneWord: "",
        playerTwoGuess: "",
        wordle: ["a","b","c","d","e"],
        guessSpread: ["a","b","c","d","e"],
        numGuess: -1,
        prevGuesses: []
    });

    const [guesses, setGuesses] = useState([]);

    
    // const [isCorrect, setIsCorrect] = useState(false);

    //watch for changes in input to update the wordle and guess states
    useEffect(() => {
        setGame((prev) => ({
            ...prev,
            wordle: [...game.playerOneWord],
            guessSpread: [...game.playerTwoGuess],
        }));
    }, [game.playerOneWord, game.playerTwoGuess]);


    //once player one submits the wordle, remove the input field and button
    const handleSubmit = () => {
        const inputElement = document.getElementById("playerOneInput");
        const buttonElement = document.getElementById("playerOneButton");
        inputElement.remove();
        buttonElement.remove();
    }

    //reset the guess input field, add guess to list, and check the guess
    const handleGuess = () => {
        
        setGame((prev) => ({
            ...prev,
            playerTwoGuess: "",
            numGuess: prev.numGuess += 1,
            prevGuesses: [...prev.prevGuesses, prev.guessSpread]
        }));
        console.log("numGuess after button press: " + game.numGuess)
        checkGuess();
    }

    const checkGuess = () => {
        
        let correct = true;

        for (let i = 0; i < 5; i++) {

            if (game.wordle[i] !== game.guessSpread[i]) {
                correct = false;
                break;
            }
        }

        //if the guess is correct then show the "CORRECT!" div, also remove player two input field/button
        if (correct) {
            let correctElement = document.getElementById("correct");
            let playerTwoInputElement = document.getElementById("playerTwoInput");
            let playerTwoButtonElement = document.getElementById("playerTwoButton");
            correctElement.classList.remove("hidden");
            playerTwoInputElement.remove();
            playerTwoButtonElement.remove();
        }
        

    }


    const assignLetterColors = () => {
        console.log("num guess in assignLetterColors " + game.numGuess)
        for (let i = 0; i < 5; i++) {
            if (game.wordle[i] === game.prevGuesses[game.numGuess][i]) {
                let correctLetterDiv = document.createElement("li");
                correctLetterDiv.classList.add("green");
                correctLetterDiv.innerText= game.prevGuesses[game.numGuess][i];
                document.body.appendChild(correctLetterDiv);
            }
        };
        
    }

    return (
        <>
            <div id="main-content-container">
                <h1>2 Player wordle</h1>
                <h3>Player 1 enter a 5 letter word: </h3>
                <input id="playerOneInput" type="text" name="playerOneWord" onChange={(e) => setGame({...game, playerOneWord: e.target.value})} value={game.playerOneWord}></input>
                <button id="playerOneButton" onClick={handleSubmit} disabled={game.playerOneWord.length !== 5}>Submit</button>
                <br />
                <br />
                <h3>Player 2 enter guess: </h3>
                <input type="text" id="playerTwoInput" name="playerTwoGuess" onChange={(e) => setGame({...game, playerTwoGuess: e.target.value})} value={game.playerTwoGuess} />
                <button onClick={handleGuess} id="playerTwoButton"
                    disabled={game.playerTwoGuess.length !== 5}>Guess</button>
                <br />
            </div>
            <div class="guesses-container">
           <div class="guesses" id="guess-1">{ game.numGuess === 0 ? assignLetterColors() : null }</div>
           <div class="guesses" id="guess-2">{ game.numGuess === 2 ? assignLetterColors() : null }</div>
           </div>
            <div class="hidden" id="correct">
                <h1>CORRECT!</h1>
            </div>
        </>
    )
};

export default Wordle2;