import { createContext, useMemo, useState } from 'react';

type AuthContextValue = {
  isLoggedIn: boolean;
  userName: string | null;
  login: (name: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userName, setUserName] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      isLoggedIn: Boolean(userName),
      userName,
      login: (name: string) => setUserName(name),
      logout: () => setUserName(null)
    }),
    [userName]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
