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
        {/* <div className="sticky top-0 lg:max-w-5xl lg:max-w-4xl lg:container lg:mx-auto container">
          <Navbar />
        </div> */}
        <div>{children}</div>
        {/* <div className="sticky bottom-0 border-warna1 w-full lg:h-fit py-36 lg:py-0 lg:h-fit flex align-center items-center">
          <Footer />
        </div> */}
      </body>
    </html>
  );
}
