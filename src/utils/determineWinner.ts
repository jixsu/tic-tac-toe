export function determineWinner(
  arrayOfSelected: Array<string>,
  player: string
) {
  const mappedArray: Array<Array<number>> = arrayOfSelected.map((node) => {
    const stringArray = node.split("-");
    return stringArray.map((node) => parseInt(node));
  });
  console.log(mappedArray);
  let appearances: any = [
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (const node of mappedArray) {
    // console.log(appearances[0][2]);
    appearances[0][node[0]] += 1;
    appearances[1][node[1]] += 1;
    console.log(appearances);
    if (checkWinCondition(appearances, node) === true) {
      return true;
    }
  }
  return false;
}

function checkWinCondition(appearances: any, node: Array<number>) {
  if (appearances[0][node[0]] === 3 || appearances[1][node[1]] === 3) {
    return true;
  }
  for (const element of appearances) {
    for (const subElement of element) {
      if (subElement === 0) {
        return false;
      }
    }
  }
  return true;
}
