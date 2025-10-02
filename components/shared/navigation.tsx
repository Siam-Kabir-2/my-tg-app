"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Gamepad,
  TrophyIcon,
  Home,
  Users,
  Wallet,
} from "lucide-react";

const navItems = [
  { href: "/leaderboard", label: "Leaderboard", icon: TrophyIcon },
  { href: "/game", label: "Game", icon: Gamepad },
  { href: "/", label: "Home", icon: Home },
  { href: "/invite", label: "Invite", icon: Users },
  { href: "/wallet", label: "Wallet", icon: Wallet },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-full flex justify-around items-center bg-neutral-900/80 backdrop-blur border-t border-neutral-800 z-50 py-2 px-3">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex-1 flex flex-col items-center gap-1 px-2 py-1 transition-colors
              ${isActive ? "text-indigo-400" : "text-neutral-400 hover:text-white"}
            `}
          >
            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-xs">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}