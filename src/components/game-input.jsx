import { useState } from 'react';

const GameInput = ({ onSubmit, disabled, ...props }) => {
  const [colorGuess, setColorGuess] = useState('');
  return (
    <form
      className="flex items-end"
      onSubmit={(e) => {
        e.preventDefault();
        if (onSubmit) onSubmit();
      }}
    >
      <label htmlFor="game-input">
        Enter some letters
        <input
          value={colorGuess}
          id="game-input"
          type="text"
          maxLength={6}
          pattern="[a-fA-F0-9]{6}"
          placeholder="C0FF33"
          disabled={disabled}
          onChange={(e) => setColorGuess(e.target.value)}
          {...props}
        />
      </label>
      <button
        className="whitespace-nowrap disabled:pointer-events-none disabled:cursor-not-allowed"
        type="submit"
        disabled={disabled}
      >
        Take a Guess
      </button>
    </form>
  );
};

export default GameInput;
