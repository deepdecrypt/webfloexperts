"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#111', color: '#fff' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Something went wrong!</h2>
        <pre style={{ color: '#f99', marginBottom: '1rem' }}>{error.message}</pre>
        <button
          onClick={() => reset()}
          style={{ padding: '0.75rem 2rem', borderRadius: '0.5rem', background: '#222', color: '#fff', border: '1px solid #444', fontWeight: 600, cursor: 'pointer' }}
        >
          Try again
        </button>
      </body>
    </html>
  );
} 