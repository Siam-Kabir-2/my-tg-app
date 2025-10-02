"use client";
import { useTelegram } from "@/hooks/useTelegram";

export default function InvitePage() {
  const { webApp } = useTelegram();

  const handleInvite = () => {
    if (webApp && typeof webApp.shareApp === "function") {
      webApp.shareApp({
        message: "🚀 Join me in the $SIA Coin Telegram Mini App and earn coins! " + window.location.origin,
      });
    } else {
      alert("Telegram share not available. Open inside Telegram app.");
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