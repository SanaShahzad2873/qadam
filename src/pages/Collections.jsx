import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const collections = [
  { name: 'Noor', line: 'Roshni jo har qadam ke saath chalti hai.', price: 'Rs. 6,500' },
  { name: 'Mehr', line: 'Mohabbat ki pehli nishani.', price: 'Rs. 7,200' },
  { name: 'Saba', line: 'Hawa ki tarah halki, khoobsurat.', price: 'Rs. 6,800' },
  { name: 'Rangrez', line: 'Rangon mein basi ek purani kahani.', price: 'Rs. 7,500' },
  { name: 'Rooh', line: 'Har naqsh mein basi rooh.', price: 'Rs. 8,000' },
  { name: 'Aangan', line: 'Ghar ki yaadon jaisa apnapan.', price: 'Rs. 6,900' },
  { name: 'Sheesh Mahal', line: 'Har aks mein aik shahi riwayat.', price: 'Rs. 9,500' },
  { name: 'Dastaan', line: 'Ek kahani jo har qadam sunati hai.', price: 'Rs. 8,200' },
]

export default function Collections() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div initial="hidden" animate="show" variants={fadeUp} className="text-center mb-16">
        <span className="font-ui text-xs tracking-[0.3em] uppercase text-gold/70">Collections</span>
        <h1 className="font-display text-4xl md:text-5xl mt-4 text-cream">Har Naam Ek Kahani</h1>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((c) => (
          <motion.div
            key={c.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            onMouseEnter={() => setHovered(c.name)}
            onMouseLeave={() => setHovered(null)}
            className="group border border-gold-dim/30 hover:border-gold/60 transition-colors duration-500"
          >
            <div
              className="h-56 flex items-center justify-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1a1610, #0b0b0b)' }}
            >
              <span
                className={`font-accent text-4xl transition-all duration-700 ${
                  hovered === c.name ? 'gold-text-shine scale-110' : 'text-gold/40'
                }`}
              >
                {c.name}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl text-cream mb-2">{c.name}</h3>
              <p className="text-sm italic text-cream/60 mb-4">{c.line}</p>
              <div className="flex items-center justify-between">
                <span className="font-ui text-sm text-gold">{c.price}</span>
                <Link
                  to="/order"
                  className="focus-gold font-ui text-xs tracking-widest uppercase text-cream/70 hover:text-gold border-b border-transparent hover:border-gold pb-0.5"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
