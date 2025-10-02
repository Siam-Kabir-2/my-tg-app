export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  photo_url?: string;
}

export interface WebAppInitData {
  user?: TelegramUser;
  auth_date?: string;
  hash?: string;
}

export interface TelegramWebApp {
  initData: string;
  initDataUnsafe: WebAppInitData;
  colorScheme: "dark" | "light";
  isExpanded: boolean;
  expand: () => void;
  close: () => void;
  ready: () => void;
  themeParams: Record<string, string>;
  showAlert: (msg: string, cb?: () => void) => void;
  setBackgroundColor: (color: string) => void;
  MainButton: {
    text: string;
    isVisible: boolean;
    show: () => void;
    hide: () => void;
    setText: (t: string) => void;
  };
}

export interface TelegramNamespace {
  WebApp: TelegramWebApp;
}

declare global {
  interface Window {
    Telegram?: { WebApp: TelegramWebApp };
  }
}