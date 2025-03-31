export default function Nav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: 'var(--card-background)', color: 'var(--card-foreground)' }}>
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-lg">Beltlane</div>
        <div className="space-x-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="hover:opacity-75 transition-opacity"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="hover:opacity-75 transition-opacity"
          >
            FAQ
          </button>
        </div>
      </div>
    </nav>
  );
}
