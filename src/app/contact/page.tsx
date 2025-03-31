'use client';
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center pt-16 p-2">
        <Contact />
      </main>
    </>
  );
}
