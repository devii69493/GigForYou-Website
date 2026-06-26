import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GigForYou — Find the talent. Get the gig done.",
  description:
    "GigForYou is a premium freelance services marketplace where anyone can list a service they offer and anyone can browse and purchase those services.",
  keywords: [
    "freelance",
    "marketplace",
    "gig economy",
    "hire freelancers",
    "services",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-void-black text-pure-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
