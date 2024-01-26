"use client";

import { ThemeProvider as NexThemesProvider } from "next-themes";

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute: string;
  defaultTheme: string;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  return <NexThemesProvider {...props}>{children}</NexThemesProvider>;
};

export default ThemeProvider;
