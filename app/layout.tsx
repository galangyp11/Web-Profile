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
      <body className={`${inter.className}`}>
        {/* <div className="sticky top-0 md:max-w-5xl sm:max-w-4xl md:container sm:mx-auto container">
          <Navbar />
        </div> */}
        <div>{children}</div>
        {/* <div className="sticky bottom-0 border-warna1 w-full md:h-fit py-36 sm:py-0 sm:h-fit flex align-center items-center">
          <Footer />
        </div> */}
      </body>
    </html>
  );
}
