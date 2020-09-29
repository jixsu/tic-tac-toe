export function determineWinner(
  arrayOfSelected: Array<string>,
  player: string
) {
  const mappedArray: Array<Array<number>> = arrayOfSelected.map((node) => {
    const stringArray = node.split("-");
    return stringArray.map((node) => parseInt(node));
  });
  console.log(mappedArray);
  let counter = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (const node of mappedArray) {
    counter[node[0]][node[1]] = 1;
  }
  const nonDiagonalWin = checkNonDiagonalWin(counter);
  const diagonalWin = checkDiagonalWin(counter);

  if (nonDiagonalWin || diagonalWin) {
    return true;
  }
  return false;
}

function checkNonDiagonalWin(counter: Array<Array<number>>) {
  for (let x = 0; x < 3; x++) {
    let rowWin = true;
    let columnWin = true;
    for (let y = 0; y < 3; y++) {
      if (counter[x][y] !== 1) {
        rowWin = false;
      }
      if (counter[y][x] !== 1) {
        columnWin = false;
      }
    }
    if (rowWin || columnWin) {
      return true;
    }
  }
  return false;
}

function checkDiagonalWin(counter: Array<Array<number>>) {
  if (
    (counter[0][0] && counter[1][1] && counter[2][2]) ||
    (counter[0][2] && counter[1][1] && counter[2][0])
  ) {
    return true;
  }
  return false;
}
