import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Beltlane - The Pulse of ATL",
  description: "Experience the pulse of Atlanta with Beltlane",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/znj1fsb.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
