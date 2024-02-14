import { block } from '../lib/sleep';
import { memo } from 'react';

const ExpensiveComponent = () => {
  block(200);
  return (
    <div className="animate-pulse border border-orange-700 bg-orange-400 px-4 py-2 text-center font-bold">
      🗑️🔥 I am expensive! 🔥🗑️
    </div>
  );
};

export default memo(ExpensiveComponent);
