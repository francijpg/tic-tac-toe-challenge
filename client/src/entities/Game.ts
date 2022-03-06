export interface TicTacToeMovement {
  symbol: string;
  movement: number;
  player: string | undefined;
}

export interface TicTacToeResult {
  _id?: string;
  winner: string;
  result: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}
