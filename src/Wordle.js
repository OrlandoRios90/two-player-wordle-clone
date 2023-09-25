import { useRef } from "react";

function Wordle () {

    const wordleRef = useRef();
    const guessRef = useRef();
    let wordleSpread;
    let guessNumber = 1;

    const handleSubmit = () => {
        const inputElement = document.getElementById("playerOneInput");
        const buttonElement = document.getElementById("playerOneButton");
        inputElement.remove();
        buttonElement.remove();
        
        const wordleSpreadLower = wordleRef.current.value.toLowerCase();
        wordleSpread = [...wordleSpreadLower]
    
    }

    const handleGuess = () => {
        let correct = true;

        let guessSpreadlower = guessRef.current.value.toLowerCase();
        let guessSpread = [...guessSpreadlower];
        

        if (guessNumber < 5) {
            for (let i = 0; i < 5; i++) {

                if (wordleRef.current.value === guessRef.current.value) {
                    correct = true;
                    console.log("correct")
                    break;
                } else if (wordleSpread[i] !== guessSpread[i] && wordleSpread.includes(guessSpread[i]) === false) {
                    let incorrectLetterElement = document.createElement("li");
                    incorrectLetterElement.innerText = guessSpread[i];
                    document.body.appendChild(incorrectLetterElement);
                    correct = false;
                } else if (wordleSpread[i] === guessSpread[i]) {
                    let correctLetterElement = document.createElement("li");
                    correctLetterElement.classList.add("green");
                    correctLetterElement.innerText = guessSpread[i];
                    document.body.appendChild(correctLetterElement);
                    correct = false;
                } else if (wordleSpread.includes(guessSpread[i])) {
                    console.log("this is tripped, letter is in wordlespread")
                    let includesLetterElement = document.createElement("li");
                    includesLetterElement.classList.add("orange");
                    includesLetterElement.innerText = guessSpread[i];
                    document.body.appendChild(includesLetterElement);
                    correct = false;
                }
            }
        } else {
            let playerTwoInputElement = document.getElementById("playerTwoInput");
            let playerTwoButtonElement = document.getElementById("playerTwoButton");
            playerTwoInputElement.remove();
            playerTwoButtonElement.remove();
            let correctWordle = document.createElement("h3");
            correctWordle.innerText = "The correct word was: " + wordleRef.current.value;
            document.body.appendChild(correctWordle);
            correct = false;
        }

        let lineBreak = document.createElement("br");
        document.body.appendChild(lineBreak);

        //if the guess is correct then show the "CORRECT!" div, also remove player two input field/button
        if (correct) {
            let correctElement = document.getElementById("correct");
            let playerTwoInputElement = document.getElementById("playerTwoInput");
            let playerTwoButtonElement = document.getElementById("playerTwoButton");
            correctElement.classList.remove("hidden");
            playerTwoInputElement.remove();
            playerTwoButtonElement.remove();
        }

        guessNumber += 1;

    }


    return (
        <>
            <div id="main-content-container">
                <h1>2 Player wordle</h1>
                <h3>Player 1 enter a 5 letter word: </h3>
                <input id="playerOneInput" type="text" name="playerOneWord" ref={wordleRef}
                    minLength={5} maxLength={5} />
                <button id="playerOneButton" onClick={handleSubmit} >Submit</button>
                <br />
                <br />
                <h3>Player 2 enter guess: </h3>
                <input id ="playerTwoInput" type="text" name="playerTwoGuess" ref={guessRef} 
                    minLength={5} maxLength={5}/>
                <button id="playerTwoButton" onClick={handleGuess}>Guess</button>
                <br />
            </div>
            <div class="hidden" id="correct">
                <h1>Correct!</h1>
            </div>
            <div id="guesses-container">

            </div>
        </>
    )
};

export default Wordle;