// app/page.tsx
import Image from 'next/image';
import TallyForm from "@/components/TallyForm";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center pt-16 p-2">
      <Image
        src="/logo2.png"
        alt="Beltlane Logo"
        width={200}
        height={100}
        className="mb-2"
      />
      <TallyForm />
      <About />
      <FAQ />
    </main>
    </>
  );
}


