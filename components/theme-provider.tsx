"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

const ThemeContext = createContext<{
  theme: "dark" | "light";
  toggle: () => void;
}>({ theme: "dark", toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as
      | "dark"
      | "light"
      | null;
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    setTheme(stored ?? (prefersDark ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const value = useMemo(() => ({ theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={clsx(theme === "dark" ? "dark" : "", "min-h-dvh")}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="btn-ghost rounded-full p-2 border border-white/10"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
