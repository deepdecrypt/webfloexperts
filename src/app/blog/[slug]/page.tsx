import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

export default function BlogPost() {
  notFound();
  return null;
}