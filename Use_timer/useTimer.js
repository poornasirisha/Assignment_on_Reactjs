
import { useState, useEffect } from 'react';

const useTimer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  const resetTimer = () => {
    setElapsedTime(0);
  };

  return { elapsedTime, resetTimer };
};

export default useTimer;
