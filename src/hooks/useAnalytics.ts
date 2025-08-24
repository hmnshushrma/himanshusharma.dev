// src/hooks/useAnalytics.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("config", "G-289VVQ2HGN", {
      page_path: location.pathname + location.search,
    });
  }, [location]);
}
