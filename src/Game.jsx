import { useGame } from "./GameContext";
import Hole from "./Hole";


export default function Game() {
    const { score, molePosition, hitMole, restartGame } = useGame();
    const holes = [0,1,2,3,4,5,6,7,8];

  return (
    <main>
        <h1>Whack a Mole</h1>
        <p>Score: {score}</p>
        <button onClick={restartGame}>Restart</button>
        <div className="game-board">
            {holes.map((hole) => {
                return <Hole
                key={hole}
                hasMole={hole === molePosition}
                onHit={hitMole}
                />

            })}
        </div>
    </main>
        );
}
