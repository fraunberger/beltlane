'use client';
import FAQ from "@/components/FAQ";
import Nav from "@/components/Nav";

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center pt-16 p-2">
        <FAQ />
      </main>
    </>
  );
}
