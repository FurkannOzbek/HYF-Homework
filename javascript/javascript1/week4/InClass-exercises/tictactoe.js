// Playable version for later

const position = [
  ["o", "x", " "],
  ["o", "o", "o"],
  [" ", "x", "o"],
];
let winner;
let loser;
let hasEnded;
let obj = {};

function getRenderedGame(arr) {
  console.log(`*******
*${arr[0][0]}*${arr[0][1]}*${arr[0][2]}*
*${arr[1][0]}*${arr[1][1]}*${arr[1][2]}*
*${arr[2][0]}*${arr[2][1]}*${arr[2][2]}*`);
}

function checkWinnerAndLoser(char) {
  if (char === "x") {
    winner = "x";
    loser = "o";
  } else {
    winner = "o";
    loser = "x";
  }
  hasEnded = true;
  return { winner, loser, hasEnded };
}

function getGameInfo(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Check rows and columns
    if (
      (arr[i][0] === arr[i][1] && arr[i][0] === arr[i][2]) ||
      (arr[0][i] === arr[1][i] && arr[0][i] === arr[2][i])
    ) {
      if (arr[i][i] === "x" || arr[i][i] === "o") {
        return checkWinnerAndLoser(arr[i][i]);
      }
    }
  }

  // Check diagonals
  if (
    (arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2]) ||
    (arr[0][2] === arr[1][1] && arr[0][2] === arr[2][0])
  ) {
    if (arr[1][1] === "x" || arr[1][1] === "o") {
      return checkWinnerAndLoser(arr[1][1]);
    }
  }

  // If no winner, return default values
  winner = undefined;
  loser = undefined;
  hasEnded = false;
  return { winner, loser, hasEnded };
}

const renderedGame = getRenderedGame(position);
console.log(renderedGame);
const gameInfo = getGameInfo(position);
console.log(gameInfo);
