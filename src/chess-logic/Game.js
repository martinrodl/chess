import { Chess } from 'chess.js';

export default class Game {
  constructor() {
    this.chess = new Chess();
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
    const algebraic = this.indexToAlgebraic(index);
    const square = this.chess.get(algebraic);

    if (this.selectedPiece) {
      const move = this.chess.move({
        from: this.selectedPiece,
        to: algebraic,
        promotion: 'q', // always promote to a queen for simplicity
      });
      if (move) {
        this.selectedPiece = null;
      } else {
        // if the move is invalid, deselect the piece
        this.selectedPiece = null;
      }
    } else if (square && square.color === this.chess.turn()) {
      this.selectedPiece = algebraic;
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

  getTurn() {
    return this.chess.turn();
  }
}
