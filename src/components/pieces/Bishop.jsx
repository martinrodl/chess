import React from 'react';

function Bishop({ player }) {
  const imgUrl =
    player === 1
      ? 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg'
      : 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg';

  return (
    <div>
      <img src={imgUrl} alt="Bishop" />
    </div>
  );
}

export default Bishop;
