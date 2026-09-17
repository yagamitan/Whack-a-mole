import { createContext, useContext, useState } from "react";

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(0);

  const getRandomPosition = () => {
    return Math.floor(Math.random() * 9);
  };

  const startGame = () => {
    setScore(0);
    setMolePosition(getRandomPosition());
    setIsPlaying(true);
  };

  const hitMole = () => {
    setScore((currentScore) => currentScore + 1);
    setMolePosition(getRandomPosition());
  };

  const restartGame = () => {
    setIsPlaying(false);
  };

  return (
    <GameContext.Provider
      value={{
        isPlaying,
        score,
        molePosition,
        startGame,
        hitMole,
        restartGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
    const context = useContext(GameContext);

    if(context === null) {
        throw new Error("useGame must be used inside GameProvider");
    }
    return context;
}