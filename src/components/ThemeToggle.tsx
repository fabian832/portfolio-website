// src/components/ThemeToggle.tsx
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Initialize from localStorage or default to dark
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" || !("theme" in localStorage);
    }
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="ml-4 p-2 rounded-full transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <span className="text-yellow-400 text-xl">☀️</span>
      ) : (
        <span className="text-slate-700 text-xl">🌙</span>
      )}
    </button>
  );
}