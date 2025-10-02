"use client";

import { useState, useEffect } from "react";

export default function GamePage() {
  const [score, setScore] = useState(0);
  useEffect(() => {
    const savedScore = localStorage.getItem("sia_score");
    if (savedScore) setScore(Number(savedScore));
  }, []);

  useEffect(() => {
    localStorage.setItem("sia_score", score.toString());
  }, [score]);
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700">
      <div className="max-w-sm w-full bg-neutral-900 rounded-2xl shadow-2xl p-8 space-y-8 border border-green-700/30">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-3xl font-extrabold text-green-400 drop-shadow-lg text-center">
            $SIA Coin
          </h1>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-2xl font-bold text-green-300">Score</span>
          <span className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
            {score}
          </span>
        </div>
        <div className="flex justify-center">
          <button
            className="focus:outline-none w-[250px] h-[250px] rounded-full overflow-hidden flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition"
            onClick={() => setScore(score + 1)}
            style={{ background: "none", border: "none", padding: 0 }}
            aria-label="Tap to Earn"
          >
            <img
              src="/siamcoin.svg"
              alt="Siamcoin"
              className="w-[250px] h-[250px]"
              draggable={false}
            />
          </button>
        </div>
      </div>
    </main>
  );
}
