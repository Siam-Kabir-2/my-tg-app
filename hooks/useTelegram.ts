"use client";

import { useEffect, useState } from "react";
import { TelegramWebApp, TelegramUser } from "@/types/telegram";

interface UseTelegramResult {
  webApp: TelegramWebApp | null;
  user: TelegramUser | null;
  loading: boolean;
  error: string | null;
}

export function useTelegram(): UseTelegramResult {
  const [webApp, setWebApp] = useState<TelegramWebApp | null>(null);
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Runs only in browser
    if (typeof window === "undefined") return;
    try {
      const wa = window.Telegram?.WebApp;
      if (!wa) {
        setError("Telegram WebApp object not found (open inside Telegram).");
        setLoading(false);
        return;
      }
      wa.ready();
      wa.expand();
      setWebApp(wa);
      if (wa.initDataUnsafe?.user) {
        setUser(wa.initDataUnsafe.user);
      }
    } catch (e: any) {
      setError(e?.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  return { webApp, user, loading, error };
}