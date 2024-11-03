// import Link from 'next/link'
// export default function Page() {
//   return <Link href="/dashboard">Dashboard</Link>;
// }
'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <div onClick={() => router.push('/dashboard')}>
      GO to Dashboard !!!
    </div>
  )
}