import React, { useEffect } from 'react';

function Queen({
  index,
  piece,
  possibleClick,
  possibleToMove,
  setPossibleMoves,
  setClicked,
  clicked,
  player,
  board,
}) {
  const imgUrl =
    player === 1
      ? 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg'
      : 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg';

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

Queen.defaultProps = {
  board: new Array(64).fill(null),
};

export default Queen;
