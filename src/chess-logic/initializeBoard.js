export default function initializeBoard() {
  const squares = new Array(64).fill(null);

  for (let i = 0; i < 64; i++) {
    squares[i] = {
      index: i,
      piece: null,
      player: null,
    };
  }

  // Pawns
  for (let i = 8; i < 16; i++) {
    squares[i] = { ...squares[i], piece: 'pawn', player: 1 };
    squares[i + 40] = { ...squares[i + 40], piece: 'pawn', player: 2 };
  }

  // Rooks
  squares[0] = { ...squares[0], piece: 'rook', player: 1 };
  squares[7] = { ...squares[7], piece: 'rook', player: 1 };
  squares[56] = { ...squares[56], piece: 'rook', player: 2 };
  squares[63] = { ...squares[63], piece: 'rook', player: 2 };

  // Knights
  squares[1] = { ...squares[1], piece: 'knight', player: 1 };
  squares[6] = { ...squares[6], piece: 'knight', player: 1 };
  squares[57] = { ...squares[57], piece: 'knight', player: 2 };
  squares[62] = { ...squares[62], piece: 'knight', player: 2 };

  // Bishops
  squares[2] = { ...squares[2], piece: 'bishop', player: 1 };
  squares[5] = { ...squares[5], piece: 'bishop', player: 1 };
  squares[58] = { ...squares[58], piece: 'bishop', player: 2 };
  squares[61] = { ...squares[61], piece: 'bishop', player: 2 };

  // Queens
  squares[3] = { ...squares[3], piece: 'queen', player: 1 };
  squares[59] = { ...squares[59], piece: 'queen', player: 2 };

  // Kings
  squares[4] = { ...squares[4], piece: 'king', player: 1 };
  squares[60] = { ...squares[60], piece: 'king', player: 2 };

  return squares;
}
