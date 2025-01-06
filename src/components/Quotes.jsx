import React, { useState, useEffect } from "react";
import "./Quotes.css";

const Quotes = () => {
  const quotes = [
    "The best way to predict the future is to create it. ",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. ",
    "Don't watch the clock; do what it does. Keep going. ",
    "The secret of getting ahead is getting started. ",
    "It does not matter how slowly you go as long as you do not stop. ",
    "Believe you can and you're halfway there. ",
    "The only way to do great work is to love what you do. ",
    "Hardships often prepare ordinary people for an extraordinary destiny. ",
    "Your time is limited, so don’t waste it living someone else’s life. ",
    "Act as if what you do makes a difference. It does. ",
  ];

  // Select a random quote on each page refresh
  const [currentQuote, setCurrentQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, []); 

  return (
    <div className="quote-container d-flex flex-column justify-content-center align-items-center p-4 border border-dark rounded shadow hover-effect" style={{ borderWidth: "5px" }}>
      <h2 className="text-primary text-center mb-3">Words of Wisdom</h2>
      <p className="fs-4 text-center fw-semibold text-dark">
        "{currentQuote}"
      </p>
    </div>
  );
};

export default Quotes;
