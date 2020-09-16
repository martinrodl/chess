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
    if (player === 1) {
      for (let i = index, seven = true, nine = true; i < 64; i++) {
        if (index === i) continue;
        if (Math.abs(i - index) % 7 === 0 && seven) {
          if (Math.abs(i - index) % 7 === 0 && board[i].player === 1) {
            seven = false;
          } else if (
            Math.abs(i - index) % 7 === 0 &&
            (board[i].player === 2 || i % 8 === 7 || i % 8 === 0)
          ) {
            resArray.push(i);
            seven = false;
          } else {
            resArray.push(i);
          }
        }
        if (Math.abs(i - index) % 9 === 0 && nine) {
          if (Math.abs(i - index) % 9 === 0 && board[i].player === 1) {
            nine = false;
          } else if (
            (i - index) % 9 === 0 &&
            (board[i].player === 2 || i % 8 === 7 || i % 8 === 0)
          ) {
            resArray.push(i);
            nine = false;
          } else {
            resArray.push(i);
          }
        }
      }
      for (let i = index, seven = true, nine = true; i > 0; i--) {
        if (index === i) continue;
        if (Math.abs(i - index) % 7 === 0 && seven) {
          if (Math.abs(i - index) % 7 === 0 && board[i].player === 1) {
            seven = false;
          } else if (
            Math.abs(i - index) % 7 === 0 &&
            (board[i].player === 2 || i % 8 === 7 || i % 8 === 0)
          ) {
            resArray.push(i);
            seven = false;
          } else {
            resArray.push(i);
          }
        }
        if (Math.abs(i - index) % 9 === 0 && nine) {
          if (Math.abs(i - index) % 9 === 0 && board[i].player === 1) {
            nine = false;
          } else if (
            (i - index) % 9 === 0 &&
            (board[i].player === 2 || i % 8 === 7 || i % 8 === 0)
          ) {
            resArray.push(i);
            nine = false;
          } else {
            resArray.push(i);
          }
        }
      }
    }
    if (player === 2) {
      for (let i = index, seven = true, nine = true; i < 64; i++) {
        if (index === i) continue;
        if (Math.abs(i - index) % 7 === 0 && seven) {
          if (Math.abs(i - index) % 7 === 0 && board[i].player === 2) {
            seven = false;
          } else if (
            Math.abs(i - index) % 7 === 0 &&
            (board[i].player === 1 || i % 8 === 7 || i % 8 === 0)
          ) {
            resArray.push(i);
            seven = false;
          } else {
            resArray.push(i);
          }
        }
        if (Math.abs(i - index) % 9 === 0 && nine) {
          if (Math.abs(i - index) % 9 === 0 && board[i].player === 2) {
            nine = false;
          } else if (
            (i - index) % 9 === 0 &&
            (board[i].player === 1 || i % 8 === 7 || i % 8 === 0)
          ) {
            resArray.push(i);
            nine = false;
          } else {
            resArray.push(i);
          }
        }
      }
      for (let i = index, seven = true, nine = true; i > 0; i--) {
        if (index === i) continue;
        if (Math.abs(i - index) % 7 === 0 && seven) {
          if (Math.abs(i - index) % 7 === 0 && board[i].player === 2) {
            seven = false;
          } else if (
            Math.abs(i - index) % 7 === 0 &&
            (board[i].player === 1 || i % 8 === 7 || i % 8 === 0)
          ) {
            resArray.push(i);
            seven = false;
          } else {
            resArray.push(i);
          }
        }
        if (Math.abs(i - index) % 9 === 0 && nine) {
          if (Math.abs(i - index) % 9 === 0 && board[i].player === 2) {
            nine = false;
          } else if (
            (i - index) % 9 === 0 &&
            (board[i].player === 1 || i % 8 === 7 || i % 8 === 0)
          ) {
            resArray.push(i);
            nine = false;
          } else {
            resArray.push(i);
          }
        }
      }
    }
    return resArray;
  }
}

Bishop.defaultProps = {
  board: new Array(64).fill(null),
};

export default Bishop;
