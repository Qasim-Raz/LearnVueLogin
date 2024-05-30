function calSumOfRow_Col(squareArray) {
  // for sum of each row
  let rowSum = [];
  for (let row of squareArray) {
    row = row.reduce((a, b) => a + b);
    rowSum.push(row);
  }

  // for sum of each colm
  let colmSum = [];
  for (let i = 0; i < squareArray[0].length; i++) {
    let eachColmSum = 0;
    //i will be the index for every n0 of colm
    for (let j = 0; j < squareArray.length; j++) {
      // j will be the index for every no of row
      eachColmSum += squareArray[j][i];
    }
    colmSum.push(eachColmSum);
  }
  let mainDiagonal = squareArray[0][0] + squareArray[1][1] + squareArray[2][2];
  let primaryDiagonal =
    squareArray[0][2] + squareArray[1][1] + squareArray[2][0];
  // to check every element of both arrays are equal or not
  for (let i = 0; i < rowSum.length; i++) {
    if (
      rowSum[i] === colmSum[i] &&
      rowSum[i] === mainDiagonal &&
      rowSum[i] === primaryDiagonal
    ) {
      return true;
    }
    return false;
  }
}

let squareArray = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
];
if (calSumOfRow_Col(squareArray)) {
  console.log(
    `[${squareArray[0]}],[${squareArray[1]}],[${squareArray[2]}] 'Yes' the given square box is magic square box `
  );
} else {
  console.log(
    `[${squareArray[0]}],[${squareArray[1]}],[${squareArray[2]}] 'No' the given square box is magic square box `
  );
}
