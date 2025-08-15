import React, { useState, useEffect } from 'react';
import Board from '../Board/Board.js';
import GameLogic from '../../chess-logic/Game';
import FamousGames from '../FamousGames/FamousGames.js';
import { parse } from 'pgn-parser';

const game = new GameLogic();

function Game() {
  const [board, setBoard] = useState(game.board);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [famousGame, setFamousGame] = useState(null);
  const [moveIndex, setMoveIndex] = useState(0);

  const handleSquareClick = (index) => {
    if (famousGame) return;
    game.handleSquareClick(index);
    setBoard([...game.board]);
    setSelectedPiece(game.selectedPiece);
  };

  const handleSelectGame = (pgn) => {
    const [parsedPgn] = parse(pgn);
    setFamousGame(parsedPgn);
    game.reset();
    setBoard([...game.board]);
    setMoveIndex(0);
  };

  const handleNextMove = () => {
    if (!famousGame) return;
    if (moveIndex < famousGame.moves.length) {
      game.move(famousGame.moves[moveIndex].notation.notation);
      setBoard([...game.board]);
      setMoveIndex(moveIndex + 1);
    }
  };

  const handlePreviousMove = () => {
    if (!famousGame) return;
    if (moveIndex > 0) {
      game.undo();
      setBoard([...game.board]);
      setMoveIndex(moveIndex - 1);
    }
  };

  return (
    <div>
      <Board board={board} onSquareClick={handleSquareClick} />
      <FamousGames onSelectGame={handleSelectGame} />
      {famousGame && (
        <div>
          <button onClick={handlePreviousMove}>Previous</button>
          <button onClick={handleNextMove}>Next</button>
        </div>
      )}
    </div>
  );
}

export default Game;
