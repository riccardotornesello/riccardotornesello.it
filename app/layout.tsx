import type { Metadata } from "next";
import { outfit } from "@/assets/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riccardo Tornesello. Hi! 👋",
  description: "I'm Riccardo Tornesello, a software engineer based in Italy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
