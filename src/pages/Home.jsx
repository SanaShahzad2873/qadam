import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DustParticles from '../components/DustParticles'
import Khussa3D from '../components/Khussa3D'
import SignatureMoment from '../components/SignatureMoment'
import { StitchIcon, EmbroideryIcon, CuringIcon, PolishIcon } from '../components/CraftAnimations'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
}

const collections = [
  { name: 'Noor', line: 'Roshni jo har qadam ke saath chalti hai.' },
  { name: 'Mehr', line: 'Mohabbat ki pehli nishani.' },
  { name: 'Rangrez', line: 'Rangon mein basi ek purani kahani.' },
  { name: 'Sheesh Mahal', line: 'Har aks mein aik shahi riwayat.' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 30%, rgba(200,163,93,0.18), transparent 60%), radial-gradient(ellipse at 50% 90%, rgba(90,70,53,0.25), transparent 60%)',
          }}
        />
        <DustParticles count={35} />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="font-ui text-xs md:text-sm tracking-[0.3em] uppercase text-gold/80 mb-6"
        >
          by Sana Shahzad
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-accent text-6xl sm:text-7xl md:text-8xl tracking-[0.15em] gold-text-shine"
        >
          QADAM
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="font-display italic text-xl md:text-3xl text-cream/90 mt-8 max-w-2xl"
        >
          "Hum sirf khussa nahi banatay... Hum riwayat pehnatay hain."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <Link
            to="/collections"
            className="focus-gold relative z-10 inline-block mt-12 border border-gold px-10 py-3 font-ui text-xs tracking-[0.25em] uppercase text-gold hover:bg-gold hover:text-ink transition-colors duration-500"
          >
            Explore
          </Link>
        </motion.div>
      </section>

      {/* Hamari Kahani */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="px-6 md:px-12 py-28 max-w-3xl mx-auto text-center"
      >
        <span className="font-ui text-xs tracking-[0.3em] uppercase text-gold/70">Hamari Kahani</span>
        <div className="gold-line w-16 mx-auto my-6" />
        <p className="font-display italic text-2xl md:text-3xl leading-relaxed text-cream/90">
          Kuch cheezen waqt ke saath purani nahi hotin...<br />
          Unmein sirf aur gehraai aa jati hai.
        </p>
        <p className="mt-8 text-lg md:text-xl leading-relaxed text-cream/70">
          Qadam bhi unhi riwayaton mein se ek hai. Ye sirf aik brand nahi, balkeh un logon ke naam hai
          jo apni pehchan ko modern duniya mein bhi zinda rakhna chahtay hain. Har silai, har naqsh, har
          rang — Pakistan ki mitti ki khushboo lekar aata hai.
        </p>
        <Link to="/our-story" className="focus-gold inline-block mt-8 text-gold text-sm tracking-widest uppercase border-b border-gold/40 hover:border-gold pb-1">
          Poori Kahani Parhein →
        </Link>
      </motion.section>

      {/* Craftsmanship */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="relative px-6 md:px-12 py-28 bg-ink-deep border-y border-gold-dim/20"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-ui text-xs tracking-[0.3em] uppercase text-gold/70">Dastkari</span>
            <h2 className="font-display text-3xl md:text-4xl mt-4 mb-6 text-cream">The Craft Behind Every Qadam</h2>
            <p className="text-lg leading-relaxed text-cream/70">
              Har silai mein aik dua hai. Har naqsh mein aik kahani. Aur har qadam mein Pakistan ki rooh.
              Hamare karigar apne haathon se, nasl dar nasl chali aa rahi mahaarat ke saath, har juta tayyar
              kartay hain.
            </p>
            <Link to="/the-craft" className="focus-gold inline-block mt-8 text-gold text-sm tracking-widest uppercase border-b border-gold/40 hover:border-gold pb-1">
              Craft Dekhein →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Hand Stitching', Icon: StitchIcon },
              { label: 'Embroidery', Icon: EmbroideryIcon },
              { label: 'Leather Curing', Icon: CuringIcon },
              { label: 'Hand Polishing', Icon: PolishIcon },
            ].map(({ label, Icon }) => (
              <div key={label} className="border border-gold-dim/30 py-6 px-4 text-center hover:border-gold/60 transition-colors">
                <Icon />
                <p className="font-ui text-xs tracking-widest uppercase text-cream/70 mt-3">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3D Khussa Gallery */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        className="px-6 md:px-12 py-24 text-center"
      >
        <span className="font-ui text-xs tracking-[0.3em] uppercase text-gold/70">Dekhein Qareeb Se</span>
        <h2 className="font-display text-3xl md:text-4xl mt-4 mb-2 text-cream">A Khussa, Up Close</h2>
        <p className="text-cream/50 text-sm mb-10">Drag to rotate &middot; scroll to zoom</p>
        <div className="max-w-4xl mx-auto border border-gold-dim/30">
          <Khussa3D height="60vh" />
        </div>
      </motion.section>

      {/* Collections */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        className="px-6 md:px-12 py-28 bg-ink-deep border-y border-gold-dim/20"
      >
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="font-ui text-xs tracking-[0.3em] uppercase text-gold/70">Collections</span>
          <h2 className="font-display text-3xl md:text-4xl mt-4 text-cream">Har Naam Ek Kahani</h2>
        </div>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((c) => (
            <Link
              to="/collections"
              key={c.name}
              className="focus-gold group border border-gold-dim/30 hover:border-gold/60 transition-colors p-8 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full border border-gold/40 mb-6 flex items-center justify-center text-gold font-accent text-lg group-hover:bg-gold group-hover:text-ink transition-colors">
                {c.name[0]}
              </div>
              <h3 className="font-display text-2xl text-cream mb-3">{c.name}</h3>
              <p className="text-sm text-cream/60 italic">{c.line}</p>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Pehla Qadam - emotional stories */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="px-6 md:px-12 py-28 max-w-3xl mx-auto text-center"
      >
        <span className="font-ui text-xs tracking-[0.3em] uppercase text-gold/70">Pehla Qadam</span>
        <div className="gold-line w-16 mx-auto my-6" />
        <p className="font-display italic text-2xl md:text-3xl leading-relaxed text-cream/90">
          Kisi ki shaadi. Kisi ka pehla interview. Kisi ka pehla Eid. Kisi ki maa ka tohfa.
        </p>
        <p className="mt-6 text-lg text-cream/70">Har qadam ki apni kahani hoti hai.</p>
      </motion.section>

      <SignatureMoment />

      {/* CTA to Order */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="relative px-6 py-32 text-center overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(200,163,93,0.1), transparent 70%)' }} />
        <h2 className="font-display text-3xl md:text-5xl text-cream mb-6">Apna Qadam Uthayein</h2>
        <p className="text-cream/60 mb-10 max-w-xl mx-auto">Ek order jo sirf khareedari nahi, aik riwayat ki shurwaat hai.</p>
        <Link
          to="/order"
          className="focus-gold relative z-10 inline-block border border-gold px-10 py-4 font-ui text-xs tracking-[0.25em] uppercase text-gold hover:bg-gold hover:text-ink transition-colors duration-500"
        >
          Order Karein
        </Link>
      </motion.section>
    </div>
  )
}
