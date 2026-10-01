import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NOVAQEN Pharma Industries | Precision. Quality. Innovation.',
  description: 'Premium NOVAQEN Pharma Industries client demo — pharmaceutical manufacturing, quality, research and global-ready operations.',
  keywords: ['NOVAQEN Pharma Industries','pharmaceutical manufacturing','pharma R&D','quality assurance','pharmaceutical formulations'],
  openGraph: { title: 'NOVAQEN Pharma Industries', description: 'Precision, quality and innovation — premium pharmaceutical website demo.', type: 'website', images: ['/og.svg'] },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
