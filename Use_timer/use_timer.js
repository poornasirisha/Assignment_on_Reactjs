import React, { useState, useEffect } from 'react';

// Custom hook for handling a timer
const useTimer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  return {
    elapsedTime,
    isRunning,
    startTimer,
    pauseTimer,
    resetTimer,
  };
};

// Timer component using the useTimer hook
const Timer = () => {
  const { elapsedTime, isRunning, startTimer, pauseTimer, resetTimer } = useTimer();

  return (
    <div>
      <h2>Timer</h2>
      <p>Elapsed Time: {elapsedTime} seconds</p>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={pauseTimer} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
