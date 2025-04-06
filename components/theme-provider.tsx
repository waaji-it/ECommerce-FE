// components/theme-provider.tsx

"use client";

import React, { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { cn } from "@/lib/utils"; // Custom utility class for conditionally applying styles (optional)

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <NextThemesProvider
      defaultTheme="system" // Default theme: 'light', 'dark', or 'system'
      attribute="class" // This adds the theme to the <html> element as a class
    >
      <div className={cn("transition-all", "min-h-screen")}>{children}</div>
    </NextThemesProvider>
  );
};

export { ThemeProvider };
