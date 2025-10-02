'use client'
import "./globals.css";
import Script from "next/script";
import Navigation from "@/components/shared/navigation";
import { TonConnectUIProvider } from "@tonconnect/ui-react";


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
        <div id="app-root">
          {" "}
          <TonConnectUIProvider manifestUrl="https://azure-dear-lizard-134.mypinata.cloud/ipfs/bafkreift5owyhqvlmc4menbgrth2rrg56emyv5m2ydna6x4trxdlixjebu">
            {children}
          </TonConnectUIProvider>
        </div>
        <Navigation />
      </body>
    </html>
  );
}
