import { NextResponse } from 'next/server';

const products = [
  ['Pharmaceutical Tablets','Tablets'],['Hard Gel Capsules','Capsules'],['Oral Solutions','Oral solutions'],['Injectable Range','Injectables'],
  ['Nutraceuticals','Nutraceuticals'],['Healthcare Supplements','Supplements'],['Specialty Formulations','Specialty'],['Pediatric Solutions','Pediatric']
];

export async function GET(request: Request) {
  const q = new URL(request.url).searchParams.get('q')?.trim().toLowerCase() || '';
  const results = products.filter(([name, category]) => `${name} ${category}`.toLowerCase().includes(q)).map(([name, category]) => ({ name, category }));
  return NextResponse.json({ query: q, results, demo: true, integration: 'Replace with CMS/product database.' });
}
