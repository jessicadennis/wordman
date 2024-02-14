import { useState, useCallback } from 'react';
import generateRandomColor from '../lib/generate-random-color';
import ColorSwatch from './color-swatch';
import GameInput from './game-input';
import GameStatus from './game-status';

export default function Game() {
  const [correctAnswer, setCorrectAnswer] = useState(() =>
    generateRandomColor(),
  );
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const onGuess = useCallback(
    (colorInput) => {
      setHasGuessed(true);
      if (correctAnswer === colorInput) {
        setIsWinner(true);
      }
    },
    [correctAnswer],
  );

  return (
    <>
      <ColorSwatch color={correctAnswer} />
      <GameInput onSubmit={onGuess} disabled={hasGuessed} />
      <GameStatus isWinner={isWinner} hasGuessed={hasGuessed} />
      <button
        onClick={() => {
          setCorrectAnswer(generateRandomColor());
          setHasGuessed(false);
        }}
        type={hasGuessed ? 'submit' : 'button'}
      >
        Reset Color
      </button>
    </>
  );
}
