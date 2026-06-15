'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function PremiumButton({ text = 'Message on WhatsApp' }: { text?: string }){
  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      href="https://wa.me/26774892554?text=Hello%20TWS%20Liquid%20Chef.%20I%27m%20interested%20in%20your%20services"
      className="inline-block bg-accent text-black px-4 py-2 rounded-xl font-semibold"
    >
      {text}
    </motion.a>
  )
}
