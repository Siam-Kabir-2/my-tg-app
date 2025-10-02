"use client";
import { useEffect, useState } from "react";
import { TonConnect } from "@tonconnect/sdk";

export function useTonConnect() {
  const [tonConnect, setTonConnect] = useState<TonConnect | null>(null);
  const [wallet, setWallet] = useState<any>(null);

  useEffect(() => {
    const tc = new TonConnect();
    setTonConnect(tc);

    tc.onStatusChange((walletInfo) => {
      setWallet(walletInfo);
    });

    // Try to restore session
    tc.restoreConnection();
  }, []);

  const connect = async () => {
    if (tonConnect) {
      await tonConnect.connect();
    }
  };

  const disconnect = async () => {
    if (tonConnect) {
      await tonConnect.disconnect();
      setWallet(null);
    }
  };

  return { wallet, connect, disconnect };
}