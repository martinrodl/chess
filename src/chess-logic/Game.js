import initializeBoard from './initializeBoard';
import getPossibleMoves from './getPossibleMoves';

export default class Game {
  constructor() {
    this.board = initializeBoard();
    this.currentPlayer = 1; // 1 for white, 2 for black
    this.moves = [];
    this.selectedPiece = null;
    this.possibleMoves = [];
  }

  handleSquareClick(index) {
    const square = this.board[index];

    if (this.selectedPiece) {
      if (this.possibleMoves.includes(index)) {
        this.movePiece(this.selectedPiece.index, index);
        this.clearPossibleMoves();
        this.selectedPiece = null;
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
      } else {
        this.selectedPiece = null;
        this.clearPossibleMoves();
      }
    }

    if (square.piece && square.player === this.currentPlayer) {
      this.selectedPiece = { ...square.piece, index };
      this.possibleMoves = getPossibleMoves(square, index, this.board);
      this.highlightPossibleMoves();
    }
  }

  movePiece(from, to) {
    const fromSquare = this.board[from];
    this.board[to] = { ...fromSquare, index: to };
    this.board[from] = {
      index: from,
      piece: null,
      player: null,
    };
  }

  highlightPossibleMoves() {
    this.board.forEach((square) => (square.possibleToMove = false));
    this.possibleMoves.forEach((index) => {
      this.board[index].possibleToMove = true;
    });
  }

  clearPossibleMoves() {
    this.board.forEach((square) => (square.possibleToMove = false));
    this.possibleMoves = [];
  }
}
