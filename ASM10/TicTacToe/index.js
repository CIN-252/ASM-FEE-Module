const row = document.querySelector(".row");
const stw = document.querySelector(".stw");
const gameTable = document.querySelector(".game");
const form = document.querySelector("form");

const gameContext = {
  row: parseInt(row.value) || 3,
  scoreToWin: parseInt(stw.value) || 3,
  nextPlayer: "X",
  board: [],
};

startGame();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  startGame();
});

function startGame() {
  gameContext.nextPlayer = "X";
  gameContext.row = parseInt(row.value) || 3;
  gameContext.scoreToWin = parseInt(stw.value) || 3;

  const { row: rValue } = gameContext;
  gameContext.board = Array.from({ length: rValue }, () =>
    Array(rValue).fill("-")
  );

  gameTable.textContent = "";

  for (let r = 0; r < rValue; r++) {
    const gRow = document.createElement("div");
    gRow.classList.add("game-row");

    for (let c = 0; c < rValue; c++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("data-pos", r + ":" + c);
      square.addEventListener("click", updateGame);
      gRow.appendChild(square);
    }
    gameTable.appendChild(gRow);
  }
}

function updateGame(e) {
  const [row, col] = this.dataset.pos.split(":").map(Number);

  if (gameContext.board[row][col] !== "-") {
    return;
  }

  if (gameContext.nextPlayer === "X") {
    this.textContent = "X";
    gameContext.nextPlayer = "O";
  } else {
    this.textContent = "O";
    gameContext.nextPlayer = "X";
  }
  gameContext.board[row][col] = this.textContent;
  setTimeout(() => checkWinner(row, col), 0);
}

function checkWinner(r, c) {
  const { scoreToWin, row } = gameContext;
  const winnerPath = gameContext.board[r][c].repeat(scoreToWin);

  let startR = 0;
  let startC = 0;

  if (r > c) {
    startR = r - c;
    startC = 0;
  } else if (r < c) {
    startR = 0;
    startC = c - r;
  }

  let mr = startR;
  let mc = startC;
  let lrpath = "";

  while (mr < row && mc < row) {
    lrpath += gameContext.board[mr][mc];
    mr++;
    mc++;
  }

  startR = row - 1;
  startC = 0;

  if (row - 1 - r > c) {
    startR = r + c;
    startC = 0;
  } else if (row - 1 - r < c) {
    startR = row - 1;
    startC = c - (row - 1 - r);
  }

  let rlpath = "";
  mr = startR;
  mc = startC;

  while (mr >= 0 && mc < row) {
    rlpath += gameContext.board[mr][mc];
    mr--;
    mc++;
  }

  if (
    gameContext.board[r].join("").includes(winnerPath) ||
    gameContext.board
      .map((row) => row[c])
      .join("")
      .includes(winnerPath) ||
    lrpath.includes(winnerPath) ||
    rlpath.includes(winnerPath)
  ) {
    alert("The winner is: " + gameContext.board[r][c]);
    startGame();
  }
}
