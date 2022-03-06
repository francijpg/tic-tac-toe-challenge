import { FC, useEffect } from "react";
import "./EnterPlayer.css";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const EnterPlayer: FC = () => {
  const [player, setPlayer] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    document.title = "TicTacToe - Code Challenge";
  }, []);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (player.trim() === "") return;
    setPlayer("");
    return navigate(`/games/${player}`);
  };
  return (
    <div className="container">
      <h1>TIC TAC TOE | CODE CHALLENGE</h1>
      <form onSubmit={submitHandler}>
        <p>Enter your name</p>
        <input
          type="text"
          className="input-player"
          autoFocus
          value={player}
          onChange={(e) => setPlayer(e.currentTarget.value)}
        />
      </form>
    </div>
  );
};

export default EnterPlayer;
