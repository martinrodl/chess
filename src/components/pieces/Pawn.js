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
      if (
        index > 8 &&
        index < 16 &&
        index < 64 &&
        board[index + 8].piece === null
      )
        resArray.push(index + 8);
      if (
        index > 8 &&
        index < 16 &&
        index < 64 &&
        board[index + 16].piece === null
      )
        resArray.push(index + 16);
      if (index > 16 && board[index + 8].piece === null)
        resArray.push(index + 8);
    }

    if (player === 2) {
      if (index > 48 && index < 56 && board[index - 8].piece === null)
        resArray.push(index - 8);
      if (index > 48 && index < 56 && board[index - 16].piece === null)
        resArray.push(index - 16);
      if (index > 16 && board[index - 8].piece === null)
        resArray.push(index - 8);
    }

    return resArray;
  }
}

Pawn.defaultProps = {
  board: new Array(64).fill(null),
};

export default Pawn;
