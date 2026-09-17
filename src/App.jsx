import { useGame } from "./GameContext";
import Welcome from "./Welcome";
import Game from "./Game";

export default function App() {
  const { isPlaying } = useGame();

  return <>{isPlaying ? <Game /> : <Welcome />}</>;
}
