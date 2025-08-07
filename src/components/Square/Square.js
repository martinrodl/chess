import React from 'react';
import styles from './style.module.css';
import Pawn from '../pieces/Pawn';
import King from '../pieces/King';
import Bishop from '../pieces/Bishop';
import Queen from '../pieces/Queen';
import Knight from '../pieces/Knight';
import Rook from '../pieces/Rook';

export default function Square({ square, onSquareClick }) {
  const { piece, player, possibleToMove } = square;

  function isDark() {
    const { index } = square;
    const row = Math.floor(index / 8);
    return row % 2 === 0 ? index % 2 === 0 : index % 2 !== 0;
  }

  const pieceComponent = () => {
    if (piece === 'pawn') return <Pawn player={player} />;
    if (piece === 'king') return <King player={player} />;
    if (piece === 'bishop') return <Bishop player={player} />;
    if (piece === 'knight') return <Knight player={player} />;
    if (piece === 'queen') return <Queen player={player} />;
    if (piece === 'rook') return <Rook player={player} />;
    return null;
  };

  return (
    <button
      onClick={onSquareClick}
      className={`${styles.button} ${isDark() ? styles.light : styles.dark} ${
        possibleToMove ? styles.possible : ''
      }`}
    >
      {pieceComponent()}
    </button>
  );
}
