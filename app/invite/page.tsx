"use client";
import React from "react";

export default function InvitePage() {
  const handleInvite = () => {
    const botUsername = "YourBotUsername"; // replace with your bot username
    const url = `https://t.me/${botUsername}?start=invite`;

    if (window.navigator.userAgent.includes("Telegram")) {
      // inside Telegram, open share URL
      window.open(
        `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent("🚀 Join me in $SIA Coin Telegram Mini App and earn coins!")}`,
        "_blank"
      );
    } else {
      // fallback for web
      navigator.clipboard.writeText(url).then(() => {
        alert("Invite link copied to clipboard!");
      });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className="text-2xl font-bold text-green-400">Invite Friends</h1>
      <button
        className="px-6 py-3 rounded bg-yellow-400 text-neutral-900 font-bold shadow hover:bg-yellow-300 transition"
        onClick={handleInvite}
      >
        Invite via Telegram
      </button>
      <p className="text-neutral-400 text-sm">
        Share this app with your friends and earn rewards!
      </p>
    </main>
  );
}
