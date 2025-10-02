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
          <TonConnectUIProvider manifestUrl="https://azure-dear-lizard-134.mypinata.cloud/ipfs/bafkreiftyghsq2hmw2ob7zmnd7ks6s6rus5djefhcefelyhoilma2ulfg4">
            {children}
          </TonConnectUIProvider>
        </div>
        <Navigation />
      </body>
    </html>
  );
}
