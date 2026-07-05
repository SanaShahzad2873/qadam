import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import posts from '../data/journalPosts'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
}

export default function Journal() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div initial="hidden" animate="show" variants={fadeUp} className="text-center mb-16">
        <span className="font-ui text-xs tracking-[0.3em] uppercase text-gold/70">Safarnama</span>
        <h1 className="font-display text-4xl md:text-5xl mt-4 text-cream">Journal</h1>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((p) => (
          <motion.div
            key={p.slug}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Link
              to={`/journal/${p.slug}`}
              className="focus-gold group block border border-gold-dim/30 hover:border-gold/60 transition-colors overflow-hidden"
            >
              <div
                className="h-44 flex items-center justify-center"
                style={
                  p.image
                    ? { backgroundImage: `url(${p.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                    : { background: 'linear-gradient(135deg, #1a1610, #0b0b0b)' }
                }
              >
                {!p.image && <span className="font-accent text-3xl text-gold/30 group-hover:text-gold/50 transition-colors">{p.tag}</span>}
              </div>
              <div className="p-8">
                <span className="font-ui text-[10px] tracking-widest uppercase text-gold/70">{p.tag}</span>
                <h3 className="font-display text-2xl text-cream mt-3 mb-3">{p.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{p.excerpt}</p>
                <span className="inline-block mt-4 text-xs tracking-widest uppercase text-gold/70 group-hover:text-gold">
                  Parhein →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
