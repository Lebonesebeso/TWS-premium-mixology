import Link from 'next/link'
import { PremiumButton } from '../components/PremiumButton'

export default function Home(){
  return (
    <main>
      <header className="relative hero h-[64vh] flex items-center justify-center">
        <video className="hero-video" autoPlay muted loop playsInline poster="https://assets.mixkit.co/videos/43964/43964-thumb-720-0.jpg">
          <source src="https://assets.mixkit.co/videos/43964/43964-720.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content container text-center">
          <h1 className="text-4xl md:text-6xl font-semibold">TWS Liquid Chef</h1>
          <p className="mt-4 text-muted">Premium mixology for corporate events, weddings & private celebrations</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <PremiumButton text="Message on WhatsApp" />
            <Link href="/services" className="px-4 py-2 rounded-md border border-white/10">View Services</Link>
          </div>
        </div>
      </header>

      <section className="container mt-12">
        <h2 className="text-2xl font-semibold">Featured Services</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white/2 p-6 rounded-xl">Weddings</article>
          <article className="bg-white/2 p-6 rounded-xl">Corporate Events</article>
          <article className="bg-white/2 p-6 rounded-xl">Mixology Experiences</article>
        </div>
      </section>
    </main>
  )
}
