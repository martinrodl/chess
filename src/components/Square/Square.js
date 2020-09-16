import React from 'react';

import styles from './style.module.scss';
import Pawn from '../pieces/Pawn';
import King from '../pieces/King';
import Bishop from '../pieces/Bishop';
import Queen from '../pieces/Queen';
import Knight from '../pieces/Knight';
import Rook from '../pieces/Rook';

export default function Square({
  index,
  piece,
  possibleClick,
  possibleToMove,
  setPossibleMoves,
  setClicked,
  clicked,
  player,
  board,
}) {
  const handleClick = () => {
    setClicked(index);
  };
  function isDark() {
    const row = Math.floor(index / 8);
    if (row % 2 === 0) {
      return index % 2 === 0 ? true : false;
    } else {
      return index % 2 === 0 ? false : true;
    }
  }

  const handleSquare = () => {
    if (piece === 'pawn')
      return (
        <Pawn
          key={index}
          player={player}
          setPossibleMoves={setPossibleMoves}
          index={index}
          clicked={clicked}
          board={board}
        />
      );
    else if (piece === 'king')
      return (
        <King
          key={index}
          player={player}
          setPossibleMoves={setPossibleMoves}
          index={index}
          clicked={clicked}
        />
      );
    else if (piece === 'bishop')
      return (
        <Bishop
          key={index}
          player={player}
          setPossibleMoves={setPossibleMoves}
          index={index}
          clicked={clicked}
          board={board}
        />
      );
    else if (piece === 'knight')
      return (
        <Knight
          key={index}
          player={player}
          setPossibleMoves={setPossibleMoves}
          index={index}
          clicked={clicked}
          board={board}
        />
      );
    else if (piece === 'queen')
      return (
        <Queen
          key={index}
          player={player}
          setPossibleMoves={setPossibleMoves}
          index={index}
          clicked={clicked}
        />
      );
    else if (piece === 'rook')
      return (
        <Rook
          key={index}
          player={player}
          setPossibleMoves={setPossibleMoves}
          index={index}
          clicked={clicked}
        />
      );
  };
  return (
    <button
      onClick={handleClick}
      disabled={!possibleClick}
      className={`${styles.button} ${isDark() ? styles.light : styles.dark} 
      ${possibleToMove ? styles.possible : ''}`}
    >
      {handleSquare()}
    </button>
  );
}

Square.defaultProps = { possibleClick: false, possibleToMove: false };
