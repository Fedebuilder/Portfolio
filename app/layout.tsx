import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Federico De Micco — Web Developer",
  description: "Full-stack developer and marketing strategist based in Sydney.",
  robots: "noindex, nofollow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
