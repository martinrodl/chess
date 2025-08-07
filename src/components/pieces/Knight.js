import React from 'react';

function Knight({ player }) {
  const imgUrl =
    player === 1
      ? 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg'
      : 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg';

  return (
    <div>
      <img src={imgUrl} alt="Knight" />
    </div>
  );
}

export default Knight;
