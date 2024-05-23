import type { Metadata } from "next";
import { montserrat } from "@/assets/fonts";
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
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
