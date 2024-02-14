import { useState, useCallback } from 'react';
import generateRandomColor from '../lib/generate-random-color';
import ColorSwatch from './color-swatch';
import ExpensiveComponent from './expensive-component';
import GameInput from './game-input';
import GameStatus from './game-status';

const Application = () => {
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
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
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
      <ExpensiveComponent />
    </main>
  );
};

export default Application;
