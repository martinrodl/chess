import React from 'react';

function Pawn({ player }) {
  const imgUrl =
    player === 1
      ? 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'
      : 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg';

  return (
    <div>
      <img src={imgUrl} alt="Pawn" />
    </div>
  );
}

export default Pawn;
