import { useState, useEffect } from "react";

function Wordle2 () {

    const [game, setGame] = useState({
        playerOneWord: "",
        playerTwoGuess: "",
        wordle: ["a","b","c","d","e"],
        guessSpread: ["a","b","c","d","e"],
        numGuess: 0,
    });

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

    //reset the guess input field and check the guess
    const handleGuess = () => {
        setGame({
            ...game,
            playerTwoGuess: ""
        });
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
            let correctElement = document.getElementById("guess");
            let playerTwoInputElement = document.getElementById("playerTwoInput");
            let playerTwoButtonElement = document.getElementById("playerTwoButton");
            correctElement.classList.remove("hidden");
            playerTwoInputElement.remove();
            playerTwoButtonElement.remove();
        }
        
        //colorLetters();
    }

    //need to redo this function
    const colorLetters = () => {

        for (let i = 0; i < 5; i++) {
            if (game.wordle[i] === game.guessSpread[i]) {
                let element = document.getElementById("id" + i);
                element.classList.add("green");
                console.log("color letters triggered, i = i")
            } 
        }
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
           <div id="guess-0">      </div>
           <div id="guess-1">      </div>
           <div id="guess-2">      </div>
           <div id="guess-3">      </div>
           <div id="guess-4">      </div>
            <div class="hidden" id="guess">
                <h1>CORRECT!</h1>
            </div>
        </>
    )
};

export default Wordle2;