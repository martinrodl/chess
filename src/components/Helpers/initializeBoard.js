import Pawn from '../pieces/Pawn';

function ini() {
  const resArray = new Array(64).fill(null);
  for (let i = 8; i <= 16; i++) {
    resArray[i] = (
      <Pawn
        player={1}
        setPossibleMoves={setPossibleMoves}
        index={index}
        clicked={clicked}
        board={board}
      />
    );
  }
}
