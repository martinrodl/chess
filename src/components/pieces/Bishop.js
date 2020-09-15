import React, { useEffect } from 'react';

function Bishop({ player, setPossibleMoves, clicked, index, board }) {
  const imgUrl =
    player === 1
      ? 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg'
      : 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg';

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
      if (Math.abs(i - index) % 7 === 0 || Math.abs(i - index) % 9 === 0)
        resArray.push(i);
    }
    console.log(resArray);
    return resArray;
  }
}

Bishop.defaultProps = {
  board: new Array(64).fill(null),
};

export default Bishop;
