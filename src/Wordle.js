import { useState } from "react";

function Wordle () {

    const [playerOneWord, setPlayerOneWord] = useState("");
    const [playerTwoGuess, setPlayerTwoGuess] = useState("");
    const [wordle, setWordle] = useState("");
    const [guessSpread, setGuessSpread] = useState("");
    const [numGuess, setNumGuess] = useState(5);


    const handleSubmit = () => {
        let spreadWord = [...playerOneWord];
        setWordle(spreadWord);
    }

    const handleGuess = (e) => {
    
        setPlayerTwoGuess(e.target.value);
        setGuessSpread([...playerTwoGuess]);
               
    }

    const checkGuess = () => {
        
        let correct = true;

        console.log(wordle);
        console.log(guessSpread);

        for (let i=0; i<5; i++){
            console.log("wordle" + i + " " + wordle[i])
            console.log("guessSpread" + i + " " + guessSpread[i])
            if (wordle[i] !== guessSpread[i]) {
                correct = false;
                break;
            }
        }

        if (correct) {
           
            let element = document.getElementById("guess");
            element.classList.remove("hidden");
        }
        
    }

    return (
        <>
            <div id="main-content container">
                <h1>2 Player wordle</h1>
                <h3>Player 1 enter a 5 letter word: </h3>
                <input type="text" name="playerOneWord" onChange={(e) => setPlayerOneWord(e.target.value)} value={playerOneWord}></input>
                <button onClick={handleSubmit} disabled={playerOneWord.length !== 5}>Submit</button>
                <br />playerOneWord = {playerOneWord}
                <br />wordle = {wordle}
                <h3>Player 2 enter guess: </h3>
                <input type="text" name="playerTwoGuess" onChange={(e) => handleGuess(e)} />
                <button onClick={checkGuess} 
                    disabled={playerTwoGuess.length !== 5}>Guess</button>
                <br />{guessSpread}
            </div>
            <div class="hidden" id="guess">
                <h1>Correct!</h1>
            </div>
        </>
    )
};

export default Wordle;