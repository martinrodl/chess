import React from 'react';

function Rook({ player }) {
  const imgUrl =
    player === 1
      ? 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg'
      : 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg';

  return (
    <div>
      <img src={imgUrl} alt="Rook" />
    </div>
  );
}

export default Rook;
