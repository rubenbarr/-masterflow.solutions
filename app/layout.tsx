import "./globals.css";
import { Inter, Cinzel } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Elite Plumbing & Handyman | NW Georgia & Chattanooga",
  description:
    "Professional plumbing, handyman & whole home solutions. 24/7 emergency services in NW Georgia, Chattanooga & Dalton.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cinzel.variable} font-body bg-blackPrimary text-white`}
      >
        {children}
      </body>
    </html>
  );
}
