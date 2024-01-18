import { Inter } from "next/font/google";
import type { Metadata } from 'next'
import "./globals.css";
import ThemeProvider from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Lorem Veterinary',
  description: 'This is a web application for clients of Lorem Veterinary who wish set an appointment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative flex flex-row">
        <ThemeProvider>
          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
