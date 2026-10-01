import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="error-screen">
      <div className="error-card">
        <span className="eyebrow teal">NOVAQEN / 404</span>
        <h1>Page not found.</h1>
        <p>The requested route is not available in this demo build.</p>
        <Link className="btn primary" href="/">Return home</Link>
      </div>
    </main>
  );
}
