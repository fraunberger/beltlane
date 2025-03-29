// app/page.tsx
import Image from 'next/image';
import TallyForm from "@/components/TallyForm";
import FAQ from "@/components/FAQ";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2">
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
  );
}


