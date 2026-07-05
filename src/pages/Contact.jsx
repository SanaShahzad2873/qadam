import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
}

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-xl mx-auto text-center">
      <motion.div initial="hidden" animate="show" variants={fadeUp}>
        <span className="font-ui text-xs tracking-[0.3em] uppercase text-gold/70">Contact</span>
        <h1 className="font-display text-4xl md:text-5xl mt-4 mb-10 text-cream">Rabta Karein</h1>

        <div className="flex flex-col gap-6 font-ui text-sm tracking-widest uppercase">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="focus-gold text-cream/80 hover:text-gold border-b border-gold-dim/30 pb-4">
            Instagram
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="focus-gold text-cream/80 hover:text-gold border-b border-gold-dim/30 pb-4">
            TikTok
          </a>
          <a href="https://wa.me/923123207029" target="_blank" rel="noopener noreferrer" className="focus-gold text-cream/80 hover:text-gold border-b border-gold-dim/30 pb-4">
            WhatsApp — +92 312 3207029
          </a>
          <p className="text-cream/60 normal-case tracking-normal text-base font-body italic pt-4">
            Pakistan
          </p>
        </div>
      </motion.div>
    </div>
  )
}
