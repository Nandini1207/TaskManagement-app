import { useState, useEffect } from "react";

const Header = ({ isNewFest, timeleft, isDarkMode }) => {
  let [currentWord, setCurrentWord] = useState("incredible");
  let words=["incredible","amazing","fantastic","awesome","wonderful","beautiful","lovely","great","excellent","fabulous","marvelous","terrific","stupendous","astonishing","awe-inspiring","remarkable","extraordinary","magnificent","breathtaking","spectacular","splendid","outstanding","impressive","mind-blowing","jaw-dropping","superb","phenomenal","top-notch","first-rate","world-class","top-drawer","ace","cracking","smashing","sensational","stellar","magic","super","tremendous","fantabulous","mega","fab","brilliant","magic","super","tremendous","fantabulous","mega","fab","brilliant","magic","super","tremendous","fantabulous","mega","fab","brilliant","magic","super","tremendous"];
  
  useEffect(() => {
    let wordChange = setInterval(() => {
      setCurrentWord((prevWord) => {
        let currentIndex = words.indexOf(prevWord);
        return words[(currentIndex + 1) % words.length];
      });
    }, 1000);

    return () => clearInterval(wordChange);
  }, []);

  return (
    <div
      className={`header-container d-flex justify-content-between align-items-center p-4 border border-dark ${
        isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="text-start">
        <h1 className="header-title ">
          {isNewFest ? "Happy Pongal🪁🪁" : "Advance Happy Pongal🪁🪁"}
        </h1>
        <p className="fs-3">
          Make this year <strong className="text-success fs-1">{currentWord}</strong>
        </p>
      </div>
      <div className="timer-section">
        <h3 className="border border-danger rounded-pill bg-danger p-2 fs-0 mx-5 mb-5">
          {timeleft.hours < 10 ? `0${timeleft.hours}` : timeleft.hours}:
          {timeleft.min < 10 ? `0${timeleft.min}` : timeleft.min}:
          {timeleft.sec < 10 ? `0${timeleft.sec}` : timeleft.sec}
        </h3>
      </div>
    </div>
  );
};

export default Header;




