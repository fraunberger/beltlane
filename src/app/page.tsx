// app/page.tsx
import Image from 'next/image';
import TallyForm from "@/components/TallyForm";
import FAQ from "@/components/FAQ";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <Image
        src="/logo.png"
        alt="Beltlane Logo"
        width={200}
        height={100}
        className="mb-6"
      />
      <TallyForm />
      <About />
      <FAQ />
    </main>
  );
}


