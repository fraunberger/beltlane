'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-md" style={{ background: 'var(--card-background)', color: 'var(--card-foreground)', borderBottom: '1px solid var(--card-foreground)' }}>
      <div className="max-w-5xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link href="/" className="font-bold text-lg hover:opacity-75 transition-opacity">Beltlane</Link>
          <Link href="/about" className="hover:opacity-75 transition-opacity">About</Link>
          <Link href="/faq" className="hover:opacity-75 transition-opacity">FAQ</Link>
        </div>
        <Image
          src="/logo2.png"
          alt="Beltlane Logo"
          width={100}
          height={50}
          className="hover:opacity-90 transition-opacity"
        />
      </div>
    </nav>
  );
}
