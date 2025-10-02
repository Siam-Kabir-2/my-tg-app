import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navigation from "@/components/shared/navigation";
import TelegramFullscreen from "@/components/shared/AppExpand";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crypto Mini App",
  description: "Telegram Mini App Starter",
  viewport: "width=device-width,initial-scale=1,viewport-fit=cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-900 text-white`}>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
        <TelegramFullscreen />
        <Navigation />
        <div id="app-root">{children}</div>
      </body>
    </html>
  );
}