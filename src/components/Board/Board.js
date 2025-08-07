import React from 'react';
import Square from '../Square/Square';
import style from './style.module.css';

function Board({ board, onSquareClick }) {
  return (
    <div className={style.board}>
      {board.map((square, index) => (
        <Square
          key={index}
          square={square}
          onSquareClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;
