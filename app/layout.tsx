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
          <TonConnectUIProvider manifestUrl="https://azure-dear-lizard-134.mypinata.cloud/ipfs/bafkreibofxuwj6gsjzxtoe4izyn5nfbn7f2tleswhn7vb4xcc7napbarde">
            {children}
          </TonConnectUIProvider>
        </div>
        <Navigation />
      </body>
    </html>
  );
}
