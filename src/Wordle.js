import { useState, useEffect } from "react";

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

    const handleGuess = () => {
         let spreadWord = [...playerTwoGuess];
         setGuessSpread(spreadWord);
         console.log(wordle);
         console.log(spreadWord);
         
    }

    return (
        <div id="main-content container">
            <h1>2 Player wordle</h1>
            <h3>Player 1 enter word: </h3>
            <input type="text" name="playerOneWord" onChange={(e) => setPlayerOneWord(e.target.value)} value={playerOneWord}></input>
            <button onClick={handleSubmit} disabled={playerOneWord.length != 5}>Submit</button>
            <br/>playerOneWord = {playerOneWord.length}
            <br/>wordle = {wordle}
            <h3>Player 2 enter guess: </h3>
            <input type="text" name="playerTwoGuess" onChange={(e) => setPlayerTwoGuess(e.target.value)} />
            <button onClick={handleGuess}>Guess</button>
        </div>
    )
};

export default Wordle;