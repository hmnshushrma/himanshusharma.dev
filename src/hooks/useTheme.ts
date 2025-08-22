import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "theme";

function getPreferredTheme(): Theme {
  const stored = (localStorage.getItem(STORAGE_KEY) as Theme | null);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme());

  // apply to <html>, persist, and set color-scheme
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    html.style.colorScheme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // if user hasn't chosen explicitly, follow OS changes
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setTheme(mql.matches ? "dark" : "light");
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const toggle = () => setTheme(t => (t === "dark" ? "light" : "dark"));
  const setSystem = () => {
    localStorage.removeItem(STORAGE_KEY);
    setTheme(getPreferredTheme());
  };

  return { theme, toggle, setTheme, setSystem };
}
