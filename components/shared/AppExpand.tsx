"use client";
import { useEffect } from "react";

export default function TelegramFullscreen() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      webApp.ready();
      webApp.expand();
      webApp.setBackgroundColor("#1a1a1a"); // match your bg
      webApp.MainButton.hide();
    }
  }, []);
  return null;
}