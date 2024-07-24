import type { Metadata } from "next";
import Script from "next/script";
import { montserrat } from "@/assets/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riccardo Tornesello",
  description: "I'm Riccardo Tornesello, a software engineer based in Italy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Script src="/clarity.js" />
      </body>
    </html>
  );
}
