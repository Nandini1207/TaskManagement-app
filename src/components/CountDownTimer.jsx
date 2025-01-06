import { useState, useEffect } from "react";
import Header from "./Header";
import Confetti from "react-confetti";

const CountDownTimer = () => {
  let targetedTime = new Date("2025-01-13T00:00:00");

  let calculateTimeLeft = () => {
    let now = new Date();
    let remainingTime = targetedTime - now;

    if (remainingTime <= 0) {
      return { hours: 0, min: 0, sec: 0 };
    }

    let hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    let min = Math.floor((remainingTime / (1000 * 60)) % 60);
    let sec = Math.floor((remainingTime / 1000) % 60);

    return { hours, min, sec };
  };

  let [timeleft, setTimeLeft] = useState(calculateTimeLeft());
  let [showConfetti, setShowConfetti] = useState(false);
  let [isNewFest, setIsNewFest] = useState(false);
  let [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (timeleft.hours === 0 && timeleft.min === 0 && timeleft.sec === 0) {
      setShowConfetti(true);
      setIsNewFest(true);

      let confettiRemoval = setTimeout(() => {
        setShowConfetti(false);
      }, 10 * 60 * 1000);

      return () => clearTimeout(confettiRemoval);
    }

    let timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeleft]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`countdown-timer ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <button
        className="btn btn-outline-danger position-fixed top-0 end-0 mt-5 m-3"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <i className="bi bi-sun-fill"></i>
        ) : (
          <i className="bi bi-moon-fill"></i>
        )}
      </button>
      <Header isNewFest={isNewFest} timeleft={timeleft} isDarkMode={isDarkMode} />
      {showConfetti && <Confetti />} 
    </div>
  );
};

export default CountDownTimer;