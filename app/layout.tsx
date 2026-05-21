import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HIGHTECH VENDING MACHINE — Intelligent Vending Solutions",
  description:
    "Premium smart vending machines with cashless payments, cloud monitoring, and AI-powered customer experiences for modern B2B retail.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
