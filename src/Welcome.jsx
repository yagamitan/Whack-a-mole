import { useGame } from "./GameContext";

export default function Welcome() {
  const { startGame } = useGame();

  return (
    <main>
      <h1>Whack a Mole</h1>

      <p>
        Please click the mole to score points. Every time you hit it, the mole
        will move to another hole.
      </p>
      <button onClick={startGame}>Play</button>
    </main>
  );
}
