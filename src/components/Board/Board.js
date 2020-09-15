import React, { useState, useEffect } from 'react';
import Square from '../Square/Square';
import style from './style.module.scss';

function Board(props) {
  const [clicked, setClicked] = useState(null);
  const [choosed, setChoosed] = useState(null);
  const [possibleMoves, setPossibleMoves] = useState([]);
  const [board, setBoard] = useState(ini());
  const [player, setPlayer] = useState(false); //white - true
  useEffect(() => {
    const newArr = board.slice();
    for (let i = 0; i < 64; i++) {
      if (possibleMoves.includes(i)) {
        newArr[i].possibleToMove = true;
        newArr[i].possibleClick = true;
      } else newArr[i].possibleToMove = false;
    }
    setBoard(newArr);
    setChoosed(clicked);
  }, [possibleMoves]);

  useEffect(() => {
    if (possibleMoves.includes(clicked)) {
      const newArr = board.slice();
      newArr[clicked] = { ...newArr[choosed], index: clicked };
      newArr[choosed] = { ...emptyField, index: choosed };
      for (let i = 0; i < 64; i++) {
        if (player && newArr[i].player === 1) newArr[i].possibleClick = true;
        else if (!player && newArr[i].player === 2)
          newArr[i].possibleClick = true;
        else newArr[i].possibleClick = false;
      }
      setPossibleMoves([]);
      setPlayer(!player);
      setBoard(newArr);
      setClicked(null);
    }
  }, [clicked]);

  return (
    <div className={style.board}>
      {board.map((square) => (
        <Square
          key={square.index}
          board={board}
          index={square.index}
          piece={square.piece}
          possibleClick={square.possibleClick}
          setClicked={setClicked}
          player={square.player}
          index={square.index}
          clicked={clicked}
          possibleToMove={square.possibleToMove}
          setPossibleMoves={setPossibleMoves}
        />
      ))}
    </div>
  );

  function ini() {
    const resArray = new Array(64).fill(null);
    for (let i = 0; i < 64; i++) {
      resArray[i] = {
        index: i,
        piece: null,
        clicked: false,
        possibleClick: false,
        possibleToMove: false,
      };

      if (i < 16) resArray[i].player = 1;
      if (i >= 48) resArray[i].player = 2;
      if (i === 4 || i === 60) {
        resArray[i] = {
          ...resArray[i],
          piece: 'king',
          possibleClick: false,
        };
      } else if (i === 0 || i === 7 || i === 56 || i === 63) {
        resArray[i] = {
          ...resArray[i],
          piece: 'rook',
          possibleClick: false,
        };
      } else if (i === 3 || i === 59) {
        resArray[i] = {
          ...resArray[i],
          piece: 'queen',
          possibleClick: false,
        };
      } else if (i === 1 || i === 6 || i === 57 || i === 62) {
        resArray[i] = {
          ...resArray[i],
          piece: 'knight',
          possibleClick: true,
        };
      } else if (i === 2 || i === 5 || i === 58 || i === 61) {
        resArray[i] = {
          ...resArray[i],
          piece: 'bishop',
          possibleClick: false,
        };
      } else if ((i >= 8 && i < 16) || (i >= 48 && i < 56)) {
        resArray[i] = {
          ...resArray[i],
          piece: 'pawn',
          possibleClick: true,
        };
      }
    }

    return resArray;
  }
}

export default Board;

const emptyField = {
  piece: null,
  clicked: false,
  possibleClick: false,
  possibleToMove: false,
};
