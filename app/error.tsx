'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('NOVAQEN application error:', error);
  }, [error]);

  return (
    <main className="error-screen">
      <div className="error-card">
        <span className="eyebrow teal">NOVAQEN / RECOVERY</span>
        <h1>Something interrupted this experience.</h1>
        <p>The page can be reloaded safely. If the issue continues, check the browser console and server terminal for the original error.</p>
        <button className="btn primary" onClick={() => reset()}>Try again</button>
      </div>
    </main>
  );
}
