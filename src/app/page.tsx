// app/page.tsx
import TallyForm from "@/components/TallyForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center mb-4">Your Petition Headline</h1>
      <p className="text-lg text-center mb-6">A compelling reason to sign your petition.</p>
      <TallyForm />
    </main>
  );
}
