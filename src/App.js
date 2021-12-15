import React, { useState, useEffect } from 'react';
import './App.css';

App.defaultProps = {
  player: true
}

function checkWin(){
  const winningCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ]

  const board = document.querySelectorAll(".square");
  let res = "none";
  for(let i = 0; i < 8; i++){
    if (board[winningCases[i][0]].style.backgroundColor === board[winningCases[i][1]].style.backgroundColor
      && board[winningCases[i][1]].style.backgroundColor === board[winningCases[i][2]].style.backgroundColor
      && board[winningCases[i][0]].style.backgroundColor === board[winningCases[i][2]].style.backgroundColor
      && (board[winningCases[i][0]].style.backgroundColor === "blue" || board[winningCases[i][0]].style.backgroundColor === "red")){
      res = board[winningCases[i][0]].style.backgroundColor;
    }
  }
  
  return res;
}

function App(props) {
  const [player, setPlayer] = useState(props.player);
  const [winner, setWinner] = useState(null);
  const [color, setColor] = useState(player ? "blue" : "red");

  
  
  useEffect(() => {
    let res;

    setColor(player ? "blue" : "red");
    res = checkWin();
    if (res !== "none")
      setWinner(res);
  }, [player]);

  const TicTac = (e) => { 
    if (e.target.style.backgroundColor !== "blue"
    && e.target.style.backgroundColor !== "red"){
      setPlayer(player ? false : true);
      e.target.style.backgroundColor = color;
    }
  }

  const End = () => {
    return (
      <div>
        <h1>{winner} is the winner !</h1>
        <button>Rematch</button>
      </div>
    )
  }

  const Options = () => {
    return (
      <div>
        <h1>options</h1>
        <button>restart</button>
        <button>Vs Computer</button>
        <button>1v1</button>
      </div>
    )
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>TIC TAC TOE</h1>
        </header>
      </div>
      <div className="App-content">
        <div className="App-board" id="playground">
          <div id="1" className={"square"} onClick={TicTac}>1</div>
          <div id="2" className={"square"} onClick={TicTac}>2</div>
          <div id="3" className={"square"} onClick={TicTac}>3</div>
          <div id="4" className={"square"} onClick={TicTac}>4</div>
          <div id="5" className={"square"} onClick={TicTac}>5</div>
          <div id="6" className={"square"} onClick={TicTac}>6</div>
          <div id="7" className={"square"} onClick={TicTac}>7</div>
          <div id="8" className={"square"} onClick={TicTac}>8</div>
          <div id="9" className={"square"} onClick={TicTac}>9</div>
        </div>
      </div>
      {winner ? <End /> : <Options />}
    </>
  );
}

export default App;
