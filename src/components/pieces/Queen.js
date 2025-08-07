import React from 'react';

function Queen({ player }) {
  const imgUrl =
    player === 1
      ? 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg'
      : 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg';

  return (
    <div>
      <img src={imgUrl} alt="Queen" />
    </div>
  );
}

export default Queen;
