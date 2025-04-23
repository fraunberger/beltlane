// app/page.tsx
'use client';

import React from 'react';
import { HeroBanner } from '../components/HeroBanner';
import TallyForm from "@/components/TallyForm";
import Nav from "@/components/Nav";

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen flex flex-col bg-background text-text font-sans ">
      <HeroBanner />
      <section className="flex-1 p-4 max-w-7xl mx-auto w-full flex flex-col gap-4">
        <Nav />
        <TallyForm />
      </section>
    </main>
  );
}


