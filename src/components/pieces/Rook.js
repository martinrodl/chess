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
    if (player === 1) {
      for (let i = index + 1, verical = true, horizontal = true; i < 64; i++) {
        if (verical && index % 8 === i % 8) {
          if (board[i].player === 1) {
            verical = false;
          } else if (board[i].player === 2) {
            verical = false;
            resArray.push(i);
          } else {
            resArray.push(i);
          }
        }
        if (
          horizontal &&
          Math.floor(index / 8) * 8 + 8 > i &&
          Math.floor(index / 8) * 8 <= i
        ) {
          if (board[i].player === 1) {
            horizontal = false;
          } else if (board[i].player === 2) {
            horizontal = false;
            resArray.push(i);
          } else {
            resArray.push(i);
          }
        }
      }
      for (let i = index - 1, verical = true, horizontal = true; i >= 0; i--) {
        if (verical && index % 8 === i % 8) {
          if (board[i].player === 1) {
            verical = false;
          } else if (board[i].player === 2) {
            verical = false;
            resArray.push(i);
          } else {
            resArray.push(i);
          }
        }
        if (
          horizontal &&
          Math.floor(index / 8) * 8 + 8 > i &&
          Math.floor(index / 8) * 8 <= i
        ) {
          if (board[i].player === 1) {
            horizontal = false;
          } else if (board[i].player === 2) {
            horizontal = false;
            resArray.push(i);
          } else {
            resArray.push(i);
          }
        }
      }
    }
    if (player === 2) {
      for (let i = index + 1, verical = true, horizontal = true; i < 64; i++) {
        if (verical && index % 8 === i % 8) {
          if (board[i].player === 2) {
            verical = false;
          } else if (board[i].player === 1) {
            verical = false;
            resArray.push(i);
          } else {
            resArray.push(i);
          }
        }
        if (
          horizontal &&
          Math.floor(index / 8) * 8 + 8 > i &&
          Math.floor(index / 8) * 8 <= i
        ) {
          if (board[i].player === 2) {
            horizontal = false;
          } else if (board[i].player === 1) {
            horizontal = false;
            resArray.push(i);
          } else {
            resArray.push(i);
          }
        }
      }
      for (let i = index - 1, verical = true, horizontal = true; i >= 0; i--) {
        if (verical && index % 8 === i % 8) {
          if (board[i].player === 2) {
            verical = false;
          } else if (board[i].player === 1) {
            verical = false;
            resArray.push(i);
          } else {
            resArray.push(i);
          }
        }
        if (
          horizontal &&
          Math.floor(index / 8) * 8 + 8 > i &&
          Math.floor(index / 8) * 8 <= i
        ) {
          if (board[i].player === 2) {
            horizontal = false;
          } else if (board[i].player === 1) {
            horizontal = false;
            resArray.push(i);
          } else {
            resArray.push(i);
          }
        }
      }
    }
    return resArray;
  }
}

Rook.defaultProps = {
  board: new Array(64).fill(null),
};

export default Rook;
