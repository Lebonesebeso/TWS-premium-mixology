'use client'
import Link from 'next/link'
export default function Navbar(){
  return (
    <header className="py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3"><img src="/TWS.jpeg" alt="logo" className="h-10"/></Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
