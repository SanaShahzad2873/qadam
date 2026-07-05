import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
}

const options = [
  { title: 'Leather', desc: 'Suede, patent, ya traditional hand-cured leather mein se chunein.' },
  { title: 'Embroidery', desc: 'Zari, resham, ya moti — apni pasand ka naqsh chunein.' },
  { title: 'Comfort', desc: 'Cushioned insole aur size ke mutabiq fitting.' },
  { title: 'Occasion', desc: 'Shaadi, Eid, ya rozana istemal — har mauqay ke liye.' },
]

export default function MadeForYou() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <motion.div initial="hidden" animate="show" variants={fadeUp}>
        <span className="font-ui text-xs tracking-[0.3em] uppercase text-gold/70">Bespoke</span>
        <h1 className="font-display text-4xl md:text-5xl mt-4 mb-6 text-cream">Made for You</h1>
        <p className="font-display italic text-xl md:text-2xl text-cream/80 max-w-2xl mx-auto leading-relaxed">
          Aap ka qadam, aap ki kahani. Hum aapke liye aik khaas juta tayyar kartay hain — sirf aapke liye.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 mt-16 text-left">
        {options.map((o) => (
          <motion.div
            key={o.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="border border-gold-dim/30 p-8 hover:border-gold/60 transition-colors"
          >
            <h3 className="font-display text-2xl text-cream mb-3">{o.title}</h3>
            <p className="text-cream/70">{o.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-16">
        <Link
          to="/order"
          className="focus-gold inline-block border border-gold px-10 py-4 font-ui text-xs tracking-[0.25em] uppercase text-gold hover:bg-gold hover:text-ink transition-colors duration-500"
        >
          Apna Design Batayein
        </Link>
      </motion.div>
    </div>
  )
}
