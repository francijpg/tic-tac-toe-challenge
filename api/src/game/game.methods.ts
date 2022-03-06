import Game from "./game.schema";

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const X_SYMBOL = "x";
const CIRCLE_SYMBOL = "o";

interface IterateNum {
  fill(arg0: number);
  [Symbol.iterator](): IterableIterator<number | string>;
}

const board: IterateNum = [0, 0, 0, 0, 0, 0, 0, 0, 0];

export const makeMark = (position: number, symbol: string) => {
  if (board[position] !== 0) {
    return "Invalid movement";
  }
  board[position] = symbol;
}

export const isDraw = () => {
  return [...board].every(item => {
    const tempItem = item.toString().toLowerCase();
    return tempItem.includes(X_SYMBOL) || tempItem.includes(CIRCLE_SYMBOL);
  });
}

export const checkWin = (currentSymbol: string) => {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      const tempSearch = board[index].toString().toLowerCase()
      return tempSearch.includes(currentSymbol)
    })
  })
}

export const endGame = async (winner: string) => {
  const newMatch = new Game({ winner, result: board });
  await newMatch.save();
  board.fill(0);
}