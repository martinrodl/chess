import Game from './Game';

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should initialize the board', () => {
    expect(game.board.length).toBe(64);
    expect(game.board[0].piece).toBe('rook');
    expect(game.board[0].player).toBe(1);
    expect(game.board[63].piece).toBe('rook');
    expect(game.board[63].player).toBe(2);
  });

  it('should switch players after a move', () => {
    // White pawn moves
    game.handleSquareClick(8); // Select pawn
    game.handleSquareClick(16); // Move pawn
    expect(game.currentPlayer).toBe(2);
  });

  it('should move a piece', () => {
    game.handleSquareClick(8); // Select pawn
    game.handleSquareClick(16); // Move pawn
    expect(game.board[8].piece).toBe(null);
    expect(game.board[16].piece).toBe('pawn');
    expect(game.board[16].player).toBe(1);
  });

  it('should get possible moves for a pawn', () => {
    game.handleSquareClick(8); // Select pawn
    expect(game.possibleMoves).toEqual([16, 24]);
  });

  it('should get possible moves for a knight', () => {
    game.handleSquareClick(1); // Select knight
    expect(game.possibleMoves).toEqual([16, 18]);
  });
});
