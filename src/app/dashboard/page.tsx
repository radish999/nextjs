'use client'
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  return <h1 onClick={() => router.push('/')}>GoBack Home!</h1>;
}