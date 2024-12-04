import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "WhatBytes",
  description: "WhatBytes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="darkreader-lock" />
        <title>WhatBytes</title>
        <meta name="description" content="WhatBytes" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        {/* Grid Container */}
        <div className="h-full grid grid-rows-[auto,1fr] grid-cols-[250px,1fr]">
          {/* Navbar */}
          <header className="row-span-1 col-span-2">
            <Navbar />
          </header>

          {/* Sidebar */}
          <aside className="row-span-1 col-span-1 bg-gray-200">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="row-span-1 col-span-1 bg-white p-4 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
