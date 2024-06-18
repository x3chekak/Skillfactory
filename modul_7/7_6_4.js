const boardSize = 3;
const board = [];
let row = [];

for (let i = 0; i < boardSize; i++) {
    row[i] = [];
    for (let j = 0; j < boardSize; j++) {
        let random = Math.random();
        let result = random <= 0.5 ? row[i].push("X") : row[i].push("O");
    }
    board.push(row[i]);
    console.log(board[i].join(' '));
};