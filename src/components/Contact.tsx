'use client';

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto my-10 p-6 rounded-lg" style={{ background: 'var(--card-background)', color: 'var(--card-foreground)' }}>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-6">
        We&apos;d love to hear from you! Get in touch with us about the Beltlane project.
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 rounded border bg-transparent"
            style={{ borderColor: 'var(--card-foreground)' }}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 rounded border bg-transparent"
            style={{ borderColor: 'var(--card-foreground)' }}
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            rows={4}
            className="w-full p-2 rounded border bg-transparent"
            style={{ borderColor: 'var(--card-foreground)' }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded font-semibold hover:opacity-80 transition-opacity"
          style={{ background: 'var(--card-foreground)', color: 'var(--card-background)' }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
