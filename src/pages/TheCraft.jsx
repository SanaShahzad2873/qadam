import { motion } from 'framer-motion'
import { CuringIcon, CuttingIcon, EmbroideryIcon, StitchIcon, PolishIcon } from '../components/CraftAnimations'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
}

const steps = [
  { title: 'Leather Curing', desc: 'Har khal ko sabar se taiyaar kiya jata hai, taake wo sallon tak apni chamak na khoye.', Icon: CuringIcon },
  { title: 'Hand Cutting', desc: 'Karigar apne haathon se har panel ko naapte hain — koi do juttay ek jaisay nahi hotay.', Icon: CuttingIcon },
  { title: 'Embroidery', desc: 'Sooay aur dhaagay se kahaniyan buni jati hain, jo dahaiyon purani riwayat se seekhi gayi hain.', Icon: EmbroideryIcon },
  { title: 'Hand Stitching', desc: 'Ek ek silai dhyan se lagai jati hai — mazbooti aur khoobsurti dono ke liye.', Icon: StitchIcon },
  { title: 'Polishing', desc: 'Aakhri chamak, jo har qadam ko khaas banati hai.', Icon: PolishIcon },
]

export default function TheCraft() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div initial="hidden" animate="show" variants={fadeUp} className="text-center mb-16">
        <span className="font-ui text-xs tracking-[0.3em] uppercase text-gold/70">Dastkari</span>
        <h1 className="font-display text-4xl md:text-5xl mt-4 text-cream">The Craft</h1>
        <p className="font-display italic text-xl text-cream/70 mt-6">
          Har silai mein aik dua hai. Har naqsh mein aik kahani.
        </p>
      </motion.div>

      <div className="space-y-10">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="grid md:grid-cols-[3.5rem_1fr_10rem] gap-6 items-center border-b border-gold-dim/20 pb-10"
          >
            <span className="font-accent text-3xl text-gold/50 shrink-0">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3 className="font-display text-2xl text-cream mb-2">{s.title}</h3>
              <p className="text-cream/70 text-lg leading-relaxed">{s.desc}</p>
            </div>
            <div className="hidden md:block">
              <s.Icon />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
