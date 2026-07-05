import { motion } from 'framer-motion'

export default function SignatureMoment() {
  return (
    <section className="relative px-6 py-24 md:py-32 text-center overflow-hidden bg-ink-deep border-t border-gold-dim/20">
      <div className="gold-line w-16 mx-auto mb-10" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="font-display italic text-2xl md:text-4xl text-cream/95 max-w-2xl mx-auto leading-relaxed"
      >
        "Har qadam sirf chalna nahi hota...<br className="hidden md:block" /> kabhi riwayat bhi chalti hai."
      </motion.p>
    </section>
  )
}
