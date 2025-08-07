import React from 'react';

function King({ player }) {
  const imgUrl =
    player === 1
      ? 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg'
      : 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg';

  return (
    <div>
      <img src={imgUrl} alt="King" />
    </div>
  );
}

export default King;
