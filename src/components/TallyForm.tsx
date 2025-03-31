'use client';

import { useEffect } from 'react';

export default function TallyForm() {
  useEffect(() => {
    // Load Tally script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto my-4">
      <iframe
        data-tally-src="https://tally.so/r/n946K1"
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Petition Form"
      ></iframe>
    </div>
  );
}
