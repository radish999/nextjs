'use client'

import { usePathname } from "next/navigation";
import Link from 'next/link';
export function NavLinks(){
  const pathname = usePathname();
  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/dashboard">
        dashboard
      </Link>
      <br />
      <Link
        className={`link ${pathname === '/about' ? 'active' : ''}`}
        href="/about"
      >
        About
      </Link>
    </nav>
  )
}