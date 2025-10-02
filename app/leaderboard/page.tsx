"use client";
import { useTelegram } from "@/hooks/useTelegram";
import { useState, useEffect } from "react";

const mockLeaderboard = [
  { username: "alice", score: 42 },
  { username: "bob", score: 35 },
  { username: "charlie", score: 28 },
];

const avatarUrls = [
  "https://api.dicebear.com/7.x/thumbs/svg?seed=alice",
  "https://api.dicebear.com/7.x/thumbs/svg?seed=bob",
  "https://api.dicebear.com/7.x/thumbs/svg?seed=charlie",
];

export default function LeaderboardPage() {
  const [myScore, setMyScore] = useState(0);
  const { user, loading } = useTelegram();

  useEffect(() => {
    const savedScore = localStorage.getItem("sia_score");
    if (savedScore) setMyScore(Number(savedScore));
  }, []);

  // Wait for Telegram user to load before rendering your row
  if (loading) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-yellow-400 text-lg">Loading...</div>
      </main>
    );
  }

  const myUsername = user?.username || "You";
  const myAvatar =
    user?.photo_url ||
    `https://api.dicebear.com/7.x/thumbs/svg?seed=${myUsername}`;

  return (
    <main className=" flex items-center justify-center min-h-screen">
      <div className="p-4 space-y-6 w-full">
        <h1 className="text-3xl font-extrabold text-center mb-4 text-yellow-400 drop-shadow-lg">
          🏆 Leaderboard
        </h1>
        <div className="max-w-md mx-auto bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 rounded-2xl shadow-2xl overflow-hidden border border-yellow-900/30">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-neutral-700/80">
                <th className="py-3 px-4 font-semibold text-sm text-neutral-300">#</th>
                <th className="py-3 px-4 font-semibold text-sm text-neutral-300">User</th>
                <th className="py-3 px-4 font-semibold text-sm text-neutral-300">Score</th>
              </tr>
            </thead>
            <tbody>
              {mockLeaderboard.map((entry, idx) => (
                <tr
                  key={entry.username}
                  className={`border-t border-neutral-700 ${
                    idx === 0 ? "bg-yellow-900/20" : ""
                  } hover:bg-neutral-700/40 transition`}
                >
                  <td className="py-3 px-4 font-bold text-center">{idx + 1}</td>
                  <td className="py-3 px-4 flex items-center gap-3">
                    <img
                      src={avatarUrls[idx]}
                      alt={entry.username}
                      className="w-10 h-10 rounded-full border-2 border-yellow-400 shadow"
                    />
                    <span className="font-semibold">{entry.username}</span>
                    {idx === 0 && (
                      <span className="ml-2 text-yellow-400 text-lg animate-bounce">★</span>
                    )}
                  </td>
                  <td className="py-3 px-4 font-mono font-bold">{entry.score}</td>
                </tr>
              ))}
              {/* Your score row styled like others */}
              <tr className="border-t border-neutral-700 bg-green-900/20 hover:bg-neutral-700/40 transition">
                <td className="py-3 px-4 font-bold text-center">You</td>
                <td className="py-3 px-4 flex items-center gap-3">
                  <img
                    src={myAvatar}
                    alt={myUsername}
                    className="w-10 h-10 rounded-full border-2 border-green-400 shadow"
                  />
                  <span className="font-semibold">{myUsername}</span>
                  <span className="ml-2 text-green-400 text-lg animate-bounce">●</span>
                </td>
                <td className="py-3 px-4 font-mono font-bold">{myScore}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}