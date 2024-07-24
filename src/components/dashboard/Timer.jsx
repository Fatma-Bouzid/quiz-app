import React, { useState, useEffect } from 'react';

const Timer = ({ time }) => {
  const [timer, setTimer] = useState(time); // Initial timer value from props

  // Effect to start the timer and update every second
  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000); // Update every second

    return () => clearInterval(countdown); // Clean up interval on unmount
  }, [timer]);

  // Calculate minutes and seconds
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div className="timer">
      <p>Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds} mins</p>
    </div>
  );
};

export default Timer;
