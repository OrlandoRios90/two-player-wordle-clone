import { useState, useEffect } from "react";

function Wordle () {

    const [playerOneWord, setPlayerOneWord] = useState("");
    const [playerTwoGuess, setPlayerTwoGuess] = useState("");
    const [wordle, setWordle] = useState("");
    const [guessSpread, setGuessSpread] = useState([0,1,2,3,4]);
    const [numGuess, setNumGuess] = useState(5);


    //this useEffect fixed the rendering issue where the state was 1 render behind
    useEffect(() => {
        setGuessSpread([...playerTwoGuess]);

    }, [playerTwoGuess]);

    const handleSubmit = () => {
        let spreadWord = [...playerOneWord];
        setWordle(spreadWord);
        setPlayerOneWord("");
    }

    /*
    const handleGuess = (e) => {
        setPlayerTwoGuess(e.target.value);
        setGuessSpread([...playerTwoGuess]);
    }
    */

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
        
        colorLetters();
    }

    const colorLetters = () => {

        for (let i = 0; i < 5; i++) {
            if (wordle[i] === guessSpread[i]) {
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
                <input id="playerOneInput" type="text" name="playerOneWord" onChange={(e) => setPlayerOneWord(e.target.value)} value={playerOneWord}></input>
                <button onClick={handleSubmit} disabled={playerOneWord.length !== 5}>Submit</button>
                <br />
                <br />
                <h3>Player 2 enter guess: </h3>
                <input type="text" name="playerTwoGuess" onChange={(e) => setPlayerTwoGuess(e.target.value)} />
                <button onClick={checkGuess} 
                    disabled={playerTwoGuess.length !== 5}>Guess</button>
                <br />
            </div>
           <div id="guess"> {
                guessSpread.map((letter, index) => {
                    return (<div id={"id" + index}>
                        <h3>{letter}</h3>
                    </div>)
                })
            }
            </div>
            <div class="hidden" id="guess">
                <h1>Correct!</h1>
            </div>
        </>
    )
};

export default Wordle;