import React, { useState, useEffect } from 'react';
import Board from '../Board/Board.js';
import GameLogic from '../../chess-logic/Game';

const game = new GameLogic();

function Game() {
  const [board, setBoard] = useState(game.board);
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleSquareClick = (index) => {
    game.handleSquareClick(index);
    setBoard([...game.board]);
    setSelectedPiece(game.selectedPiece);
  };

  return (
    <div>
      <Board board={board} onSquareClick={handleSquareClick} />
    </div>
  );
}

export default Game;
