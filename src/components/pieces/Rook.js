import React, { useEffect } from 'react';

function Rook({ player, setPossibleMoves, clicked, index, board }) {
  const imgUrl =
    player === 1
      ? 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg'
      : 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg';

  useEffect(() => {
    if (clicked === index) setPossibleMoves(getPossibleMoves());
  }, [clicked === index]);

  return (
    <div>
      <img src={imgUrl} />
    </div>
  );

  function getPossibleMoves() {
    const resArray = [];
    for (let i = 0; i < 64; i++) {
      if (i === index) continue;
      if (index % 8 === i % 8) {
        resArray.push(i);
      }
      if (Math.floor(index / 8) * 8 + 8 > i && Math.floor(index / 8) * 8 <= i) {
        resArray.push(i);
      }
    }
    return resArray;
  }

  Rook.defaultProps = {
    board: new Array(64).fill(null),
  };
}

export default Rook;
