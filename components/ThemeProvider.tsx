"use client";

import { ThemeProvider as NexThemesProvider } from "next-themes";

export default function ThemeProvider({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NexThemesProvider {...props}>{children}</NexThemesProvider>;
}
