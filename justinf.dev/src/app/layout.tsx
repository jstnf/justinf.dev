import React from "react";

import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";

const frutiger = localFont({
  src: [
    {
      path: "../../public/fonts/Frutiger.ttf",
      weight: "400"
    },
    {
      path: "../../public/fonts/Frutiger_bold.ttf",
      weight: "700"
    }
  ],
  variable: "--font-frutiger",
});

const futuraBold = localFont({
  src: [
    {
      path: "../../public/fonts/Futura_Bold.otf",
      weight: "700"
    }
  ],
  variable: "--font-futura-bold",
});

export const metadata: Metadata = {
  title: "Hello, I'm Justin!",
  description: "Welcome to my portfolio website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ViewTransitions>
        <body
          className={`${frutiger.variable} ${futuraBold.variable} antialiased`}
        >
          {children}
        </body>
      </ViewTransitions>
    </html>
  );
}
