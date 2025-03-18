import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WhatBytes",
  description:
    "WhatBytes is a product studio founded by Y Combinator alumnus and Forbes 30 Under 30 recognized entrepreneurs. Where big ideas become unstoppable products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <div className="flex flex-row">
          {/* sidebar */}
          <Sidebar />
          {/* content */}
          <main className="w-[80%] p-4 lg:px-16 lg:py-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
