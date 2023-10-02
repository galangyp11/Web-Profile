import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galang YP",
  description: "Profile website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-bgHome`}>
        <div className="sticky top-0 md:max-w-5xl sm:max-w-4xl md:container sm:mx-auto container">
          <Navbar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
