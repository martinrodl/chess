export default function getPossibleMoves(piece, index, board) {
  if (!piece) {
    return [];
  }

  const { piece: pieceType, player } = piece;

  switch (pieceType) {
    case 'pawn':
      return getPawnMoves(index, player, board);
    case 'rook':
      return getRookMoves(index, player, board);
    case 'knight':
      return getKnightMoves(index, player, board);
    case 'bishop':
      return getBishopMoves(index, player, board);
    case 'queen':
      return getQueenMoves(index, player, board);
    case 'king':
      return getKingMoves(index, player, board);
    default:
      return [];
  }
}

function getPawnMoves(index, player, board) {
  const moves = [];
  const direction = player === 1 ? 1 : -1;
  const startRow = player === 1 ? 1 : 6;
  const currentRow = Math.floor(index / 8);

  // Forward move
  const oneStep = index + 8 * direction;
  if (board[oneStep] && !board[oneStep].piece) {
    moves.push(oneStep);
    // Two steps from starting position
    if (currentRow === startRow) {
      const twoSteps = index + 16 * direction;
      if (board[twoSteps] && !board[twoSteps].piece) {
        moves.push(twoSteps);
      }
    }
  }

  // Capture moves
  const captureMoves = [index + 7 * direction, index + 9 * direction];
  for (const move of captureMoves) {
    if (
      board[move] &&
      board[move].piece &&
      board[move].player !== player &&
      Math.abs(Math.floor(move / 8) - currentRow) === 1 // Ensure it's a forward move to a different row
    ) {
      moves.push(move);
    }
  }

  return moves;
}

function getRookMoves(index, player, board) {
  const moves = [];
  const directions = [-8, 8, -1, 1]; // Up, Down, Left, Right

  for (const direction of directions) {
    for (let i = 1; i < 8; i++) {
      const newIndex = index + direction * i;
      const newRow = Math.floor(newIndex / 8);
      const oldRow = Math.floor((index + direction * (i-1)) / 8);

      if (newIndex < 0 || newIndex >= 64) break;
      // break if it wraps around the board
      if (Math.abs(direction) === 1 && newRow !== Math.floor(index/8)) break;


      if (board[newIndex].piece) {
        if (board[newIndex].player !== player) {
          moves.push(newIndex);
        }
        break;
      }
      moves.push(newIndex);
    }
  }
  return moves;
}

function getKnightMoves(index, player, board) {
  const moves = [];
  const currentRow = Math.floor(index / 8);
  const currentCol = index % 8;

  const knightMoves = [
    [-2, -1], [-2, 1], [-1, -2], [-1, 2],
    [1, -2], [1, 2], [2, -1], [2, 1],
  ];

  for (const move of knightMoves) {
    const newRow = currentRow + move[0];
    const newCol = currentCol + move[1];
    if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
      const newIndex = newRow * 8 + newCol;
      if (!board[newIndex].piece || board[newIndex].player !== player) {
        moves.push(newIndex);
      }
    }
  }
  return moves;
}

function getBishopMoves(index, player, board) {
  const moves = [];
  const directions = [-9, -7, 7, 9]; // Diagonal directions

  for (const direction of directions) {
    for (let i = 1; i < 8; i++) {
      const newIndex = index + direction * i;
      if (newIndex < 0 || newIndex >= 64) break;

      const newRow = Math.floor(newIndex / 8);
      const oldRow = Math.floor((index + direction * (i-1)) / 8);

      // break if it wraps around the board
      if(Math.abs(newRow-oldRow) !== 1) break;

      if (board[newIndex].piece) {
        if (board[newIndex].player !== player) {
          moves.push(newIndex);
        }
        break;
      }
      moves.push(newIndex);
    }
  }
  return moves;
}

function getQueenMoves(index, player, board) {
  const rookMoves = getRookMoves(index, player, board);
  const bishopMoves = getBishopMoves(index, player, board);
  return [...rookMoves, ...bishopMoves];
}

function getKingMoves(index, player, board) {
  const moves = [];
  const currentRow = Math.floor(index / 8);
  const currentCol = index % 8;

  const kingMoves = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1], [1, 0], [1, 1],
  ];

  for (const move of kingMoves) {
    const newRow = currentRow + move[0];
    const newCol = currentCol + move[1];
    if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
      const newIndex = newRow * 8 + newCol;
      if (!board[newIndex].piece || board[newIndex].player !== player) {
        moves.push(newIndex);
      }
    }
  }
  return moves;
}
