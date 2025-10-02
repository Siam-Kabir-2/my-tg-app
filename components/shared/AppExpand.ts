"use client";
import { useTelegram } from "@/hooks/useTelegram";
import { useEffect } from "react";

export default function AppExpand() {
  const { webApp } = useTelegram();
  useEffect(() => {
    if (webApp) webApp.expand();
  }, [webApp]);
  return null;
}