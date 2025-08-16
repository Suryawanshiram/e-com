import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trendie Market Best Clothes",
  description: "Quickly find the best clothes for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto p-4 sm:px-0 sm:max-w-xl lg:max-w-3xl xl:max-w-7xl">
          <Navbar />
          {children}
          <Footer />
        </div>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </body>
    </html>
  );
}
