import React from "react";
import "./Weather";
export default function Button() {
  const alerts = [
    "✨My existence matters, and because of me, there are people who smile brighter.",
    "✨The worst is all behind me, and the best is yet to come.",
    "✨I am rooted in wholeness and love.",
    "✨I am love. I am purpose. I was made with divine intention. ",
    "✨I will not compare myself to strangers on the Internet.",
    "✨I am resilient and can get through anything.",
    "✨You are enough just as you are.",
    "✨I will face challenges but they are impermanent, and I have the strength to overcome them.",
    "✨I deserve to do work that fulfills me, and I deserve to hold my dream job.",
    "✨The world is better with me in it.",
    "✨I trust my intuition.",
    "✨I can overcome all roadblocks.",
    "✨My potential is powerful. ",
    "✨I am braver than I give myself credit for.",
  ];

  const generateRandomAlert = () => {
    const randomIndex = Math.floor(Math.random() * alerts.length);
    const randomAlert = alerts[randomIndex];
    alert(randomAlert);
  };

  return (
    <div className="Button">
      <div className="button1">
        <button onClick={generateRandomAlert}>Get an affirmation</button>
      </div>

      <div className="button1">
        <button>Get a playlist for my weather</button>
      </div>
    </div>
  );
}
