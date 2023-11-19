
import React from 'react';
import useTimer from './useTimer';

const TimerComponent = () => {
  const { elapsedTime, resetTimer } = useTimer();

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <h2>Timer</h2>
      <p>Elapsed Time: {formatTime(elapsedTime)}</p>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
};

export default TimerComponent;
