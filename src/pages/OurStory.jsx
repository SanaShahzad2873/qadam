import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
}

export default function OurStory() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
      <motion.div initial="hidden" animate="show" variants={fadeUp} className="text-center mb-16">
        <span className="font-ui text-xs tracking-[0.3em] uppercase text-gold/70">Hamari Kahani</span>
        <h1 className="font-display text-4xl md:text-5xl mt-4 text-cream">Our Story</h1>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="font-display text-xl md:text-2xl leading-loose text-cream/90 space-y-6 text-center"
      >
        <p>Kuch cheezen waqt ke saath purani nahi hotin...</p>
        <p>Unmein sirf aur gehraai aa jati hai.</p>
        <p className="pt-4">Qadam bhi unhi riwayaton mein se ek hai.</p>
        <p>Ye sirf aik brand nahi... balkeh un logon ke naam hai...</p>
        <p>jo apni pehchan ko modern duniya mein bhi zinda rakhna chahtay hain.</p>
        <p className="pt-4">Har silai... har naqsh... har rang...</p>
        <p>Pakistan ki mitti ki khushboo lekar aata hai.</p>
        <p className="pt-4">Hum believe kartay hain...</p>
        <p>ke insaan ki pehchan uske pehle qadam se shuru hoti hai.</p>
        <p className="pt-4">Aur isi liye... hamara naam hai...</p>
        <p className="font-accent gold-text-shine text-3xl pt-2">Qadam.</p>
      </motion.div>

      <div className="gold-line w-24 mx-auto my-20" />

      <motion.blockquote
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="font-display italic text-lg md:text-xl text-cream/70 text-center leading-relaxed"
      >
        Har qadam sirf chalna nahi hota... Kabhi kisi maa ki dua hota hai. Kabhi kisi beti ki muskurahat.
        Kabhi Eid ki subah. Kabhi nikah ki pehli dehleez. Aur kabhi apni mitti se mohabbat ka izhar.
        Qadam unhi lamhon ko pehnane ka naam hai.
      </motion.blockquote>
    </div>
  )
}
