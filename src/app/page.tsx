// app/page.tsx
import TallyForm from "@/components/TallyForm";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-center py-8 px-4">
        <TallyForm />
      </main>
    </>
  );
}


