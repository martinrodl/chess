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
    resArray.push(
      index - 10,
      index + 10,
      index - 15,
      index + 15,
      index - 6,
      index + 6,
      index + 17,
      index - 17
    );
    resArray.filter((n) => n > 0);
    return resArray;
  }
}

Knight.defaultProps = {
  board: new Array(64).fill(null),
};

export default Knight;
