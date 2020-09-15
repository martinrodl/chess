import React from 'react';

function Queen({
  index,
  piece,
  possibleClick,
  possibleToMove,
  setPossibleMoves,
  setClicked,
  clicked,
  player,
}) {
  const imgUrl =
    player === 1
      ? 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg'
      : 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg';

  return (
    <div>
      <img src={imgUrl} />
    </div>
  );
}

export default Queen;
