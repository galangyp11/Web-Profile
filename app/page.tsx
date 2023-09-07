"use client";
import Navbar from "./Navbar/navbar";
import HomePage from "./Homepage/homepage";

export default function Home() {
  return (
    <main className="container flex min-h-screen md:max-w-5xl sm:max-w-4xl px-2 flex-col items-center justify-between md:container sm:mx-auto bg-bgHome">
      <div className="w-full ">
        <Navbar />
      </div>
      <div className="w-full h-screen">
        <HomePage />
      </div>
    </main>
  );
}
