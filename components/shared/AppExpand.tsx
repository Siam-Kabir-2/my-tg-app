"use client";
import { useEffect } from "react";

export default function TelegramFullscreen() {
  useEffect(() => {
    const interval = setInterval(() => {
      const webApp = (window as any).Telegram?.WebApp;
      if (webApp) {
        webApp.ready();
        webApp.expand();
        webApp.setBackgroundColor("#1a1a1a");
        webApp.MainButton.hide();

        // Force iframe/document to fill viewport
        document.documentElement.style.height = `${webApp.viewportHeight}px`;
        document.body.style.height = `${webApp.viewportHeight}px`;

        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return null;
}
