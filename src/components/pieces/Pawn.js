import React, { useEffect } from 'react';

function Pawn({ player, setPossibleMoves, clicked, index, board }) {
  const imgUrl =
    player === 1
      ? 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'
      : 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg';

  useEffect(() => {
    if (clicked) setPossibleMoves(getPossibleMoves());
  }, [clicked === index]);

  return (
    <div>
      <img src={imgUrl} />
    </div>
  );

  function getPossibleMoves() {
    const resArray = [];
    if (player === 1) {
      if (index < 16 && board[index + 16].piece === null)
        resArray.push(index + 16);
      if (board[index + 8].piece === null) resArray.push(index + 8);
      if (board[index + 7].player === 2) resArray.push(index + 7);
      if (board[index + 9].player === 2) resArray.push(index + 9);
    }

    if (player === 2) {
      if (index > 48 && board[index - 16].piece === null)
        resArray.push(index - 16);
      if (board[index - 8].piece === null) resArray.push(index - 8);
      if (board[index - 7].player === 1) resArray.push(index - 7);
      if (board[index - 9].player === 1) resArray.push(index - 9);
    }

    return resArray;
  }
}

Pawn.defaultProps = {
  board: new Array(64).fill(null),
};

export default Pawn;
