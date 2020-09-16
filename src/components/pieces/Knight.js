import React, { useEffect } from 'react';

function Knight({ player, setPossibleMoves, clicked, index, board }) {
  const imgUrl =
    player === 1
      ? 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg'
      : 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg';

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
        index - 10 > 0 &&
        board[index - 10].player != 1 &&
        Math.abs(((index - 10) % 8) - (index % 8)) < 6
      )
        resArray.push(index - 10);
      if (
        index + 10 < 64 &&
        board[index + 10].player != 1 &&
        Math.abs(((index + 10) % 8) - (index % 8)) < 6
      )
        resArray.push(index + 10);
      if (
        index - 15 > 0 &&
        board[index - 15].player != 1 &&
        Math.abs(((index - 15) % 8) - (index % 8)) < 6
      )
        resArray.push(index - 15);
      if (
        index + 15 < 64 &&
        board[index + 15].player != 1 &&
        Math.abs(((index + 15) % 8) - (index % 8)) < 6
      )
        resArray.push(index + 15);
      if (
        index - 6 > 0 &&
        board[index - 6].player != 1 &&
        Math.abs(((index - 6) % 8) - (index % 8)) < 6
      )
        resArray.push(index - 6);
      if (
        index + 6 < 64 &&
        board[index + 6].player != 1 &&
        Math.abs(((index + 6) % 8) - (index % 8)) < 6
      )
        resArray.push(index + 6);
      if (
        index - 17 > 0 &&
        board[index - 17].player != 1 &&
        Math.abs(((index - 17) % 8) - (index % 8)) < 6
      )
        resArray.push(index - 17);
      if (
        index + 17 < 64 &&
        board[index + 17].player != 1 &&
        Math.abs(((index + 17) % 8) - (index % 8)) < 6
      )
        resArray.push(index + 17);
    }
    if (player === 2) {
      if (
        index - 10 > 0 &&
        board[index - 10].player != 2 &&
        Math.abs(((index - 10) % 8) - (index % 8)) < 6
      )
        resArray.push(index - 10);
      if (
        index + 10 < 64 &&
        board[index + 10].player != 2 &&
        Math.abs(((index + 10) % 8) - (index % 8)) < 6
      )
        resArray.push(index + 10);
      if (
        index - 15 > 0 &&
        board[index - 15].player != 2 &&
        Math.abs(((index - 15) % 8) - (index % 8)) < 6
      )
        resArray.push(index - 15);
      if (
        index + 15 < 64 &&
        board[index + 15].player != 2 &&
        Math.abs(((index + 15) % 8) - (index % 8)) < 6
      )
        resArray.push(index + 15);
      if (
        index - 6 > 0 &&
        board[index - 6].player != 2 &&
        Math.abs(((index - 6) % 8) - (index % 8)) < 6
      )
        resArray.push(index - 6);
      if (
        index + 6 < 64 &&
        board[index + 6].player != 2 &&
        Math.abs(((index + 6) % 8) - (index % 8)) < 6
      )
        resArray.push(index + 6);
      if (
        index - 17 > 0 &&
        board[index - 17].player != 2 &&
        Math.abs(((index - 17) % 8) - (index % 8)) < 6
      )
        resArray.push(index - 17);
      if (
        index + 17 < 64 &&
        board[index + 17].player != 2 &&
        Math.abs(((index + 17) % 8) - (index % 8)) < 6
      )
        resArray.push(index + 17);
    }
    resArray.filter((n) => n < 64 && n > 0);
    return resArray;
  }
}

Knight.defaultProps = {
  board: new Array(64).fill(null),
};

export default Knight;
