'use client';

import { useState } from 'react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  
  const contacts = [
    {
      name: 'Michael Fraunberger',
      position: 'Co-founder of Beltlane',
      email: 'mikefraun19@gmail.com'
    },
    {
      name: 'Andre Dickens',
      position: 'Mayor of Atlanta',
      email: 'adickens@atlantaga.gov'
    }
  ];

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopiedEmail(email);
        setTimeout(() => setCopiedEmail(null), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <section className="max-w-3xl mx-auto my-10 p-6 rounded-lg" style={{ background: 'var(--card-background)', color: 'var(--card-foreground)' }}>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-6">
        Get in touch with the Beltlane team and city officials.
      </p>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b" style={{ borderColor: 'var(--card-foreground)' }}>
              <th className="py-3 px-4 text-left font-semibold">Name</th>
              <th className="py-3 px-4 text-left font-semibold">Position</th>
              <th className="py-3 px-4 text-left font-semibold">Email</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className="border-b" style={{ borderColor: 'var(--card-foreground)' }}>
                <td className="py-3 px-4">{contact.name}</td>
                <td className="py-3 px-4">{contact.position}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <span className="mr-2">{contact.email}</span>
                    <button
                      onClick={() => copyToClipboard(contact.email)}
                      className="p-1 rounded hover:bg-gray-200 transition-colors"
                      title="Copy to clipboard"
                    >
                      {copiedEmail === contact.email ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
