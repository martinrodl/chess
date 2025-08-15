import { Chess } from 'chess.js';

export default class Game {
  constructor() {
    this.chess = new Chess();
    this.board = this.chess.board();
  }

  get board() {
    return this.chess.board().flat().map((p, i) => {
      if (p) {
        return {
          ...p,
          index: i,
          player: p.color === 'w' ? 1 : 2,
          piece: p.type,
        };
      }
      return {
        index: i,
        piece: null,
        player: null,
      };
    });
  }

  handleSquareClick(index) {
    const square = this.chess.get(this.indexToAlgebraic(index));

    if (this.selectedPiece) {
      const move = this.chess.move({
        from: this.selectedPiece.square,
        to: this.indexToAlgebraic(index),
        promotion: 'q', // always promote to a queen for simplicity
      });
      if (move) {
        this.selectedPiece = null;
      } else {
        // if the move is invalid, deselect the piece
        this.selectedPiece = null;
      }
    } else if (square && square.color === this.chess.turn()) {
      this.selectedPiece = square;
    }
  }

  move(move) {
    return this.chess.move(move);
  }

  undo() {
    return this.chess.undo();
  }

  reset() {
    this.chess.reset();
  }

  indexToAlgebraic(index) {
    const file = String.fromCharCode(97 + (index % 8));
    const rank = 8 - Math.floor(index / 8);
    return `${file}${rank}`;
  }
}
