import axios from "axios";
import { TicTacToeMovement } from "../entities/Game";

const API = process.env.REACT_APP_API || "http://localhost:4000/api/v1";

export const getBoard = async () => {
  return await axios.get<string>(`${API}/game`);
};

export const createMovement = async (movement: TicTacToeMovement) => {
  return await axios.post(`${API}/game/move`, movement);
};
