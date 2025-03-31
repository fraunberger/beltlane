'use client';
import About from "@/components/About";
import Nav from "@/components/Nav";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center pt-16 p-2">
        <About />
      </main>
    </>
  );
}
