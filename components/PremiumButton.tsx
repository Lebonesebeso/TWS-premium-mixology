'use client'
import { motion } from 'framer-motion'

export function PremiumButton({ text = 'Message on WhatsApp' }: { text?: string }){
  return (
    <a
      href="https://wa.me/26774892554?text=Hello%20TWS%20Liquid%20Chef.%20I%27m%20interested%20in%20your%20services"
      className="inline-block bg-accent text-black px-4 py-2 rounded-xl font-semibold"
    >
      <motion.span
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </a>
  )
}
