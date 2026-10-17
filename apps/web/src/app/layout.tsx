import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Lexend_Deca } from "next/font/google";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-atkinson",
  display: "swap",
});

const lexend = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mengopi",
  description: "Find community resources and initiatives near you.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ms">
      <body className={`${atkinson.variable} ${lexend.variable}`}>
        {children}
      </body>
    </html>
  );
}
