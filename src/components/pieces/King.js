import React, { useEffect } from 'react';

export default function King({
  player,
  setPossibleMoves,
  clicked,
  index,
  board,
}) {
  const imgUrl =
    player === 1
      ? 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg'
      : 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg';

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
    resArray.push(
      index + 1 < 64 && board[index + 1].player != player && index + 1,
      index - 1 > 0 && board[index - 1].player != player && index - 1,
      index + 8 < 64 && board[index + 8].player != player && index + 8,
      index - 8 > 0 && board[index - 8].player != player && index - 8,
      index + 9 < 64 && board[index + 9].player != player && index + 9,
      index - 9 > 0 && board[index - 9].player != player && index - 9,
      index + 7 < 64 && board[index + 7].player != player && index + 7,
      index - 7 > 0 && board[index - 7].player != player && index - 7
    );

    resArray.filter((n) => n != null);
    console.log(resArray);
    return resArray;
  }
}

King.defaultProps = {
  player: 1,
  board: new Array(64).fill(null),
};
