import { RequestHandler } from "express";
import { checkWin, endGame, isDraw, makeMark } from "./game.methods";

export const startGame: RequestHandler = async (req, res) => {

  try {
    res.send('Hello from the gameboard!');
  } catch (error) {
    res.end(JSON.stringify({ Error: error.message, statusCode: 500 }));
  }

};

export const newMovement: RequestHandler = (req, res) => {

  const { symbol, movement, player } = req.body;

  try {
    makeMark(movement, symbol)
    if (checkWin(symbol)) {
      endGame(player);
      return res.end(JSON.stringify({ Message: `Player ${player} Wins!`, statusCode: 200 }));
    } else if (isDraw()) {
      endGame("draw");
      return res.end(JSON.stringify({ Message: "It's a draw!", statusCode: 200 }));
    }
    return res.status(201).json({ Message: "Movement accepted" });
  } catch (error) {
    return res.end(JSON.stringify({ Error: error.message, statusCode: 500 }));
  }

};