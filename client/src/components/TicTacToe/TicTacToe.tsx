import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./TicTacToe.css";
import { createMovement } from "../../services";
import { TicTacToeMovement } from "../../entities/Game";

const TicTacToe: FC = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);
  const { player } = useParams();
  const player2 = "Circle";

  let navigate = useNavigate();

  useEffect(() => {
    document.title = "TicTacToe - Code Challenge";
  }, []);

  const handleClick = (num: number) => {
    if (cells[num] !== "") {
      alert("already clicked");
      return;
    }

    let squares = [...cells];

    if (turn === "x") {
      squares[num] = "x";
      setTurn("o");
    } else {
      squares[num] = "o";
      setTurn("x");
    }

    setCells(squares);
    const movementInput: TicTacToeMovement = {
      symbol: turn,
      movement: num,
      player: handlePlayer(turn),
    };
    handleMovement(movementInput);
  };

  const handlePlayer = (turn: string) => {
    if (turn === "x") {
      return player;
    } else {
      return player2;
    }
  };

  const handleMovement = async (movement: TicTacToeMovement) => {
    const { data, status } = await createMovement(movement);
    if (status === 200) {
      setTurn("");
      setWinner(data.Message);
    }
    if (status >= 500) {
      alert("An Error Occurred");
      handleRestart();
    }
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
    return navigate("/");
  };

  type CellProps = {
    num: number;
  };

  const Cell: FC<CellProps> = ({ num }) => {
    return (
      <div className="cell" onClick={() => handleClick(num)}>
        {cells[num]}
      </div>
    );
  };

  return (
    <>
      {turn && (
        <div className="turn">
          Playing: {handlePlayer(turn)}, using: {turn.toLocaleUpperCase()}
        </div>
      )}
      <div className="board">
        <Cell num={0} />
        <Cell num={1} />
        <Cell num={2} />
        <Cell num={3} />
        <Cell num={4} />
        <Cell num={5} />
        <Cell num={6} />
        <Cell num={7} />
        <Cell num={8} />
        {winner && (
          <div className={`winning-message ${winner ? "show" : ""}`}>
            <div>{winner}</div>
            <button onClick={() => handleRestart()}>Play Again</button>
          </div>
        )}
      </div>
    </>
  );
};

export default TicTacToe;
