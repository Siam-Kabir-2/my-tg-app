"use client";

import { useTelegram } from "@/hooks/useTelegram";

export default function HomePage() {
  const { webApp, user, loading, error } = useTelegram();

  if (loading) return <div className="p-4">Loading...</div>;
  if (error)
    return (
      <div className="p-4 space-y-4">
        <div>{error}</div>
        <div className="text-sm opacity-70">
          Tip: Open the bot link inside Telegram to see real user data.
        </div>
      </div>
    );

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">Mini App Starter</h1>
      {user ? (
        <div className="space-y-2">
          <p>
            Hello {user.first_name} {user.last_name || ""} (@{user.username || "no-username"})
          </p>
          <p>User ID: {user.id}</p>
          <p>Language: {user.language_code || "?"}</p>
          {user.is_premium && <p>Premium ✅</p>}
        </div>
      ) : (
        <p>No user data (debug mode or not inside Telegram).</p>
      )}
      <section className="space-y-2">
        <h2 className="font-medium">App State</h2>
        <p>Color scheme: {webApp?.colorScheme}</p>
        <button
          className="px-4 py-2 rounded bg-indigo-600"
          onClick={() => webApp?.showAlert("Hello from Mini App")}
        >
          Show Telegram Alert
        </button>
      </section>
    </main>
  );
}